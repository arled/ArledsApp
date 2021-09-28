import { api } from './api';

const PRODUCTS_ENDPOINT = '/products';

const getAllProducts = async (): Promise<any> => {
  try {
    return await (
      await api.get(PRODUCTS_ENDPOINT)
    ).data;
  } catch (error) {
    throw error;
  }
};

export { getAllProducts };
