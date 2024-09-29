import { base_URL } from "@/config/baseUrl";
import axios from "axios";

export const postApi = async (token, url, data) => {
  try {
    console.log(token, data);
    console.log(`${base_URL}/${url}`);
    const response = await axios.post(`${base_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to Create");
  }
};
