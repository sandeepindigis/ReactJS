import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="py-5">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <div data-testid="foodItems">
            <li
              key={item?.card?.info?.id}
              className="flex justify-between items-start border-b pb-4"
            >
              {/* Text Section - aligned to start */}
              <div className="text-left w-3/4">
                <h1 className="font-semibold">{item?.card?.info?.name}</h1>
                <p className="text-sm text-gray-600 font-bold">
                  ₹
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </p>
                <p className="text-base text-gray-500">
                  {item?.card?.info?.description}
                </p>

                <p className="text-base text-gray-500">
                  {item?.card?.info?.rating}
                </p>
              </div>

              <div className="w-1/4 text-right">
                <div className="relative inline-block">
                  {/* Image */}
                  <img
                    className="h-30 w-40 rounded-lg"
                    alt="res-logo"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />

                  {/* Button centered at bottom of image */}
                  <button
                    onClick={() => handleAddItem(item)}
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 p-1 w-20 rounded-lg bg-gray-100 shadow-lg"
                  >
                    Add +
                  </button>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
