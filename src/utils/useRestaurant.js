import React, { useEffect, useState } from "react";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.22480&lng=79.53130&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const finalData = await fetchData.json();
    setRestaurants(
      finalData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restaurants;
};

export default useRestaurant;
