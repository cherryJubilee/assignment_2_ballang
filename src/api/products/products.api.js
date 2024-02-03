async function productsAPI() {
  const endpoint = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(endpoint, options);

  const data = await response.json();
  console.log(data);
  return data;
}

export default productsAPI;
