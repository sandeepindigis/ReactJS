import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListData.json";
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with search button", async () => {
  await act(async () => {
    render(<Body />);
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: "pizza" });
  fireEvent.click(searchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBe(4);
});
