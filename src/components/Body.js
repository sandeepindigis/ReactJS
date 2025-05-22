import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetCheck from "../utils/useInternetCheck";

const filterRestaurants = (res, setRes) => {
  const filterRestaurantsList = res.filter((item) => item?.info?.avgRating > 4);
  setRes(filterRestaurantsList);
};

const handleSearch = (inputValue, res, setRes) => {
  const searchList = res.filter((item) =>
    item?.info?.name?.toLowerCase().includes(inputValue.toLowerCase())
  );
  setRes(searchList);
};

const Body = () => {
  const [res, setRes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchRestaurantData();
  }, []);
  const fetchRestaurantData = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.22480&lng=79.53130&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const finalData = await fetchData.json();
    setRes(
      finalData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const handleSearchTextInput = (txt) => {
    if (txt?.target?.value?.length === 0) {
      fetchRestaurantData();
      setInputValue("");
    } else {
      setInputValue(txt?.target?.value);
    }
  };

  const onLineStatus = useInternetCheck();

  if (onLineStatus === false) {
    return <h1>Internet is not connected</h1>;
  }

  return res?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="py-5">
          <input
            data-testid="searchInput"
            type="text"
            className="border border-black border-solid border rounded-sm"
            value={inputValue}
            onChange={(txt) => handleSearchTextInput(txt)}
          />
          <button
            className="m-4 px-8 py-1 bg-green-100 border rounded-md"
            onClick={() => handleSearch(inputValue, res, setRes)}
          >
            search
          </button>
        </div>
        <div className="py-5">
          <button
            className="m-4 px-8 py-1 bg-green-100 border border rounded-md"
            onClick={() => filterRestaurants(res, setRes)}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {res?.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            <RestaurantCard restaurantsList={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
