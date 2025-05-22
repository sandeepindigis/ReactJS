import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantsList } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } =
    restaurantsList?.info;
  const { deliveryTime } = props?.restaurantsList?.info?.sla;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[220px] rounded-lg hover:bg-gray-200 bg-gray-10 0"
    >
      <img
        className="h-40 w-screen rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4 className="font-normal text-md">Cuisines : {cuisines.join(", ")}</h4>
      <h4 className="font-normal text-md">Rating : {avgRating}</h4>
      <h4 className="font-normal text-md">deliveryTime : {deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
