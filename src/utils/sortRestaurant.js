const alphabedSort = (data, type) => {
  return data.sort((a, b) => {
    if (a[type] < b[type]) {
      return -1;
    }
    if (a[type] > b[type]) {
      return 1;
    }
    return b.rating - a.rating;
  });
};

const sortByRating = (data) => data.sort((a, b) => b.rating - a.rating);

const sortByCity = (data) => {
  return alphabedSort(data, "city");
};

const sortByName = (data) => {
  return alphabedSort(data, "name");
};

export default {
  sortByRating,
  sortByCity,
  sortByName,
};
