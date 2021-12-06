import { useState } from 'react';
import { getProducts } from '@app-root/api/getProducts';

const useProducts = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const loadProducts = async () => {
    setProducts(await getProducts());
  };

  return { products, loadProducts };
};

export { useProducts };
