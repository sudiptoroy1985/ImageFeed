export const sortFn = (data, key) => {
  return data.sort((a, b) => (a[key] < b[key] ? -1 : 1));
};
