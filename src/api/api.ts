import axios from 'axios';

// TODO: Move to a env config file.
const ENDPOINT = 'https://my-json-server.typicode.com/benirvingplt/products';

const api = axios.create({
  baseURL: ENDPOINT,
});

export { api };
