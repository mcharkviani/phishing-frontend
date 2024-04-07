import axios from "axios";
import { baseApiUrl } from "./base";

export async function getPhishingLogs() {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return [];
    }

    const response = await axios.get(`${baseApiUrl}/phishing-logs`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error phishing-logs():", error);
    return [];
  }
}

export async function sendPhishing(email) {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return null;
    }

    const response = await axios.post(
      `${baseApiUrl}/phishing-logs/send`,
      { email },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error phishing-logs/send():", error);
    return null;
  }
}
