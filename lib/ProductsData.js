export default async function getAllProducts() {
  const products = await fetch("https://fakestoreapi.com/products");
  return await products.json();
}
