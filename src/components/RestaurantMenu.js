import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const menuData = useRestaurantMenu(resId);

  console.log("menuData===>", menuData);

  const itemCategory =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (categories) =>
        categories?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (menuData === null) {
    <Shimmer />;
  }

  return (
    <div className="flex flex-col items-center text-center px-4">
      <h1 className="font-bold text-xl">
        {menuData?.cards[2]?.card?.card?.info?.name}
      </h1>
      <p className="mb-4">
        {menuData?.cards[2]?.card?.card?.info?.cuisines.join(", ")}{" "}
        {menuData?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>

      <h1 className="font-bold text-xl py-10">Menu Items</h1>

      {/* Full-width categories inside a centered container */}
      <div className="w-full max-w-4xl">
        {itemCategory?.map((item, index) => (
          <div key={index} className="w-full">
            <RestaurantCategory
              key={item?.card?.card?.title}
              data={item?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                showIndex === 0 ? setShowIndex(null) : setShowIndex(index)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
