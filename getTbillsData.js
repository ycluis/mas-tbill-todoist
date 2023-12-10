import axios from "axios";

const getTbillsData = async () => {
  try {
    const res = await axios.get(process.env.URL, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
      },
    });
    if (res.status === 200 && res.data.success) {
      return {
        success: true,
        data: res.data.result.records,
      };
    } else {
      return {
        success: false,
        data: "Failed to fetch the website",
      };
    }
  } catch (err) {
    console.log(err);
  }
};

export default getTbillsData;
