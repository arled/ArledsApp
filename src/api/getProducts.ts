import { api } from './api';

const PRODUCTS_ENDPOINT = '/products';

const getProducts = async (): Promise<any> => {
  try {
    const { data } = await api.get(PRODUCTS_ENDPOINT);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getProducts };
