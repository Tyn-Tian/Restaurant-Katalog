const BASE_URL = "https://restaurant-api.dicoding.dev";

const sendRequest = async (url, options = null) => {
  const response = await fetch(url, options);
  return await response.json();
};

const get = async () => {
  return await sendRequest(`${BASE_URL}/list`);
};

const getAll = async (id) => {
  return await sendRequest(`${BASE_URL}/detail/${id}`);
};

const search = async (query) => {
  return await sendRequest(`${BASE_URL}/q=${query}`);
};

const addReview = async (id, name, review) => {
  return await sendRequest(`${BASE_URL}/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      name,
      review,
    }),
  });
};

export default { get, getAll, search, addReview };
