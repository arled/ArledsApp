const updateTotalPrice = (products: Array<Product>): string =>
  products.reduce((acc: number, cur: Product) => acc + cur.price, 0).toFixed(2);

export { updateTotalPrice };
