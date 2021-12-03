import { useState } from 'react';
import { getProducts } from '../api/getProducts';

const useProducts = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const loadProducts = async () => {
    setProducts(await getProducts());
  };

  return { products, loadProducts };
};

export { useProducts };
