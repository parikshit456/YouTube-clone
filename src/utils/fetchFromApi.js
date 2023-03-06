import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = axios.create({
//     baseURL: BASE_URL,
//     params: { maxResults: '50'},
//     headers: {
//       'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
//       'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
//     }
// })

const options = {
    params: { maxResults: '50'},
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
export const fetchFromApi = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`,options);
    console.log(response.data)
    return response.data;
};
  