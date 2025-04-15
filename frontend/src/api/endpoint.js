import axios from "axios";

const BASE_URL = "http://127.0.0.1:9000/api/";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const getUserProfileData = async (username) => {
  const response = await api.get(`user_data/${username}/`);
  return response.data;
};
