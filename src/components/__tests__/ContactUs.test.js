import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us page Test case", () => {
  // beforeAll(() => {
  //   console.log("Called before All");
  // });

  // beforeEach(() => {
  //   console.log("Called before Each");
  // });

  // AfterAll(() => {
  //   console.log("Called After All");
  // });

  // AfterEach(() => {
  //   console.log("Called After Each");
  // });

  test("Check Contact us is loaded", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Check button is inside the contact us page", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    //or const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Check name input is inside the contact us page", () => {
    render(<ContactUs />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("Check message input is inside the contact us page", () => {
    render(<ContactUs />);
    const input = screen.getByPlaceholderText("message");
    expect(input).toBeInTheDocument();
  });

  // we can write for 2 or more then two input or all elements

  test("Check all input is inside the contact us page", () => {
    render(<ContactUs />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
