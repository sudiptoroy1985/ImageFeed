const getSearchFn = searchTerm => {
  if (!searchTerm.length) return;
  if (
    searchTerm.charAt(0) == "'" &&
    searchTerm.charAt(searchTerm.length - 1) == "'"
  ) {
    const exactSearch = data => {
      return data.filter(item => {
        const exactSearchTerm = searchTerm.replace(/['"]+/g, "");
        if (
          (item.name && item.name.includes(exactSearchTerm)) ||
          (item.description && item.description.includes(exactSearchTerm))
        ) {
          return item;
        }
      });
    };
    return exactSearch;
  } else {
    const search = data => {
      const [...searchTerms] = searchTerm.split(" ");
      return data.filter(item => {
        if (
          (item.name &&
            [...item.name.split(" ")].some(p => searchTerms.includes(p))) ||
          (item.description &&
            [...item.description.split(" ")].some(p => searchTerms.includes(p)))
        ) {
          return item;
        }
      });
    };
    return search;
  }
};

export default getSearchFn;
