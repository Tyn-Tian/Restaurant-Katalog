export const saveData = (id) => {
  let data = loadDataFromStorage();
  data.push({ id });
  const parsed = JSON.stringify(data);
  localStorage.setItem("favorite", parsed);
};

export const loadDataFromStorage = () => {
  const serializedData = localStorage.getItem("favorite");
  const data = JSON.parse(serializedData);
  if (data !== null) {
    return data;
  }
  return [];
};

export const isLiked = (id) => {
  const data = loadDataFromStorage();

  for (const item of data) {
    if (item.id === id) {
      return true;
    }
  }
  return false;
};

export const unlikeData = (id) => {
  const data = loadDataFromStorage();
  const result = data.filter((item) => item.id !== id);
  const parsed = JSON.stringify(result);
  localStorage.setItem("favorite", parsed);
};
