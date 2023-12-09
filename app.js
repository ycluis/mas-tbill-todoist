require("dotenv").config();
const axios = require("axios");

(async () => {
  try {
    const res = await axios.get(process.env.URL, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
      },
    });

    if (res.status === 200 && res.data.success) {
      console.log(res.data.result.records);
    } else {
      console.log("Failed to fetch the website");
    }
  } catch (err) {
    console.log(err);
  }
})();
