import { base_URL } from "@/config/baseUrl";
import axios from "axios";

export async function getApi(token, url, filters = {}) {
  try {
    console.log(url, token);
    console.log(filters);

    const response = await axios.get(`${base_URL}${url}`, {
      params: filters,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch : " + error.message);
  }
}
