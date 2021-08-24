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
          (item.name &&
            item.name.toLowerCase().includes(exactSearchTerm.toLowerCase())) ||
          (item.description &&
            item.description
              .toLowerCase()
              .includes(exactSearchTerm.toLowerCase()))
        ) {
          return item;
        }
      });
    };
    return exactSearch;
  } else {
    const search = data => {
      const [...searchTerms] = searchTerm.toLowerCase().split(" ");
      return data.filter(item => {
        if (
          (item.name &&
            [...item.name.toLowerCase().split(" ")].some(p =>
              searchTerms.includes(p)
            )) ||
          (item.description &&
            [...item.description.toLowerCase().split(" ")].some(p =>
              searchTerms.includes(p)
            ))
        ) {
          return item;
        }
      });
    };
    return search;
  }
};

export default getSearchFn;
