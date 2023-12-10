import dotenv from "dotenv";
dotenv.config();

import getTbillsData from "./getTbillsData.js";
import { TodoistApi } from "@doist/todoist-api-typescript";

// eslint-disable-next-line no-unused-vars
const api = new TodoistApi(process.env.TODOIST_API);

(async () => {
  try {
    const data = await getTbillsData();

    if (data.success) {
      // TODO: Proceed with Todoist API
      // api
      //   .getTasks()
      //   .then((tasks) => console.log(tasks))
      //   .catch((err) => console.log(err));
    }
  } catch (err) {
    console.log(err);
  }
})();
