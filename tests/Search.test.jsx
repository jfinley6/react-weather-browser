import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../src/components/Search";

describe("SearchComponent", () => {
  test("renders clear button after typing", () => {
    const { getByTestId } = render(<Search />);
    const clearButton = getByTestId("clear-button");
    const autocomplete = getByTestId("autocomplete");

    // The button should not be visible before typing
    expect(autocomplete).toHaveValue("");

    // Type into the input field with anything
    fireEvent.change(autocomplete, { target: { value: " " } });

    // The clear button should now be visible
    expect(clearButton).not.toHaveClass("hidden");
  });

  // test("clears input after clicking clear button", () => {
    
  // });
});
