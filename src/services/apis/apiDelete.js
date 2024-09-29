import { base_URL } from "@/config/baseUrl";
import axios from "axios";

export async function deleteApi(token, url) {
  try {
    console.log(`${base_URL}/${url}`);
    const response = await axios.delete(`${base_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to Delete");
  }
}
