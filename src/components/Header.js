import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useContext(UserContext);

  const { loggedInUser } = data;

  const count = useSelector((store) => store?.cart?.item);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li className="p-4">
            <Link to="/">Home </Link>
          </li>
          <li className="p-4">
            <Link to="/about">About </Link>
          </li>
          <li className="p-4">
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/cart">Cart ({count.length} items)</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
