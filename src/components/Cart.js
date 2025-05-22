import React from "react";
import { useSelector } from "react-redux";
import ItemList from "../components/ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.item);

  return (
    <div className="py-5  w-6/12 m-auto">
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
