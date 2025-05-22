import React, { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const result = await fetch(MENU_URL + resId);
    const json = await result.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
