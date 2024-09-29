import { SOCKET_SERVER_URL } from "@/config/baseUrl";
import axios from "axios";

export const apiSendMessage = async (token, url, data) => {
  try {
    console.log(token, data);
    console.log(`${SOCKET_SERVER_URL}/${url}`);
    const response = await axios.post(
      `${SOCKET_SERVER_URL}/${url}`,
      { message: data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to Create");
  }
};
