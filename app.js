import dotenv from "dotenv";
dotenv.config();

import getTbillsData from "./getTbillsData.js";
import { TodoistApi } from "@doist/todoist-api-typescript";

// eslint-disable-next-line no-unused-vars
const api = new TodoistApi(process.env.TODOIST_API);

(async () => {
  try {
    const { success, items } = await getTbillsData();

    if (success) {
      for (const row of items) {
        await api.addTask({
          content: `T-bill ${row.issue_code} ANN Date`,
          dueString: row.ann_date,
          projectId: process.env.TODOIST_PROJECT_ID,
        });
      }
    }

    console.log("SUCCESS");
  } catch (err) {
    console.log(err);
  }
})();
