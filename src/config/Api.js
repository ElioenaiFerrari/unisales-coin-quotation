import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'https://coingecko.p.rapidapi.com/coins',
  headers: {
    'x-rapidapi-key': '4a6d3609e4msh62cb7e886b4f3d3p1c175ejsn6f1c5133415f',
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    useQueryString: true,
  },
});

export default Api;
