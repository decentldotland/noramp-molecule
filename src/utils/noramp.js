import dotenv from "dotenv";
dotenv.config()

export async function getApp() {
  try {
    const response = await fetch(
      `https://api.noramp.io/payments/${process.env.NORAMP_APP_ID}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: process.env.NORAMP_API_KEY,
        },
      },
    );

    const res = await response.json()

    console.log("response", res);
    return res;
  } catch (error) {
    console.log(error);
  }
}
