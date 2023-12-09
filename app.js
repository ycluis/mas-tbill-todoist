import dotenv from "dotenv";
dotenv.config();

import axios from "axios";
import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi(process.env.TODOIST_API);

(async () => {
  try {
    // const res = await axios.get(process.env.URL, {
    //   headers: {
    //     Accept: "application/json",
    //     "User-Agent":
    //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
    //   },
    // });
    // if (res.status === 200 && res.data.success) {
    //   console.log(res.data.result.records);
    // } else {
    //   console.log("Failed to fetch the website");
    // }

    //* TODOIST API
    api
      .getTasks()
      .then((tasks) => console.log(tasks))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
})();
