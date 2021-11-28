import { useState } from 'react';
import { getProducts } from '../api/getProducts';

const useProducts = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    return data;
  };

  return { products, loadProducts };
};

export { useProducts };
