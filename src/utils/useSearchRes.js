import React, { useState } from "react";
const useSearchRes = (item, inputValue) => {
  const [searchedRes, setSearchedRes] = useState([]);

  const searchList = item.filter((item) =>
    item?.info?.name?.toLowerCase().includes(inputValue.toLowerCase())
  );
  setSearchedRes(searchList);

  return searchedRes;
};

export default useSearchRes;
