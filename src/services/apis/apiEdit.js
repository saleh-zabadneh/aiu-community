import { base_URL } from "@/config/baseUrl";
import axios from "axios";

export const editApi = async (token, url, data) => {
  try {
    console.log(token, data);
    console.log(`${base_URL}/${url}`);
    const response = await axios.put(`${base_URL}${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to Edit");
  }
};
