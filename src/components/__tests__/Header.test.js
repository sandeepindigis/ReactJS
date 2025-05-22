import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Headers from "../Header";
import "@testing-library/jest-dom";

test("Should render Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  // if You have button on the screen then write the test case below.
  //   const loginButton = screen.getByRole("button");

  // const loginButton = screen.getByText("Login"); // another way to write the test case

  // if we have multiple button on the same screen then write in more descriptive way
  //   const loginButton = screen.getByRole("button",{name: "Login"});
  //   expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Cart (0 items)");
  expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText(/Cart/); // It is regex for checking the cart is in the header or not.
  expect(loginButton).toBeInTheDocument();
});

// For performing click event we use fireEvent

// test("Should render Header component with login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <Headers />
//       </Provider>
//     </BrowserRouter>
//   );

//   // if we have multiple button on the same screen then write in more descriptive way
//   //   const loginButton = screen.getByRole("button",{name: "Login"});

//   //   fireEvent.click(loginButton);
//   //   const logoutButton = screen.getByRole("button", { name: "Logout" });
//   //   expect(logoutButton).toBeInTheDocument();
// });
