import axios from "axios";

const baseURL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: baseURL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "9d35095e07mshc3e0b21c302690bp124048jsn4ce996fc0f93",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${baseURL}/${url}`, options);
  return data;
};
