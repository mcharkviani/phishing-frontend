import axios from "axios";
import { baseApiUrl } from "./base";

export async function signInApi({ email, password }) {
  try {
    const response = await axios.post(`${baseApiUrl}/auth/sign-in`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error auth/signInApi():", error);
  }
}

export async function signUpApi({
  firstName,
  lastName,
  email,
  password,
  organization,
}) {
  try {
    const response = await axios.post(`${baseApiUrl}/auth/sign-up`, {
      firstName,
      lastName,
      email,
      organization,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error auth/signUpApi():", error);
  }
}

export function signOutApi() {
  localStorage.removeItem("accessToken");
}

export async function getLoggedInUser() {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return null;
    }

    const response = await axios.get(`${baseApiUrl}/users/me`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error user/getLoggedInUser():", error);
  }
}
