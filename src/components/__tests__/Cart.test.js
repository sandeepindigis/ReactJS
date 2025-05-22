import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/menuData.json";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should Load Restaurant Menu Component ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordingHeader = screen.getByText("Big Big 6in1 Pizza");
  fireEvent.click(accordingHeader);

  expect(screen.getAllByAltText("foodItems").length).toBe(2);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByAltText("foodItems").length).toBe(4);

  const clearCartbtn = screen.getAllByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartbtn);

  expect(screen.getAllByAltText("foodItems").length).toBe(2);

  expect(
    Screen.getByText("Cart is Empty. Add Items to the cart")
  ).toBeInTheDocument();
});
