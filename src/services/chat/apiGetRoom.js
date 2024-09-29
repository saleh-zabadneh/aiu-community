import { SOCKET_SERVER_URL } from "@/config/baseUrl";
import axios from "axios";

export async function getRoomApi(token, url, filters = {}) {
  try {
    const response = await axios.get(`${SOCKET_SERVER_URL}${url}`, {
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
