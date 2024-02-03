async function productsDetailAPI(productId) {
  const endpoint = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products/${productId}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
}
export default productsDetailAPI;
