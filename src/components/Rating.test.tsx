import { screen, render, fireEvent } from "@testing-library/react";
import Rating from "./Rating";

describe("Rating component", () => {
  it("rating state is initially set to zero", () => {
    render(<Rating />);
    const ratingOne = screen.getByText("1");
    const ratingTwo = screen.getByText("2");
    const ratingThree = screen.getByText("3");
    const ratingFour = screen.getByText("4");
    const ratingFive = screen.getByText("5");
    expect(ratingOne).not.toHaveClass("selected");
    expect(ratingTwo).not.toHaveClass("selected");
    expect(ratingThree).not.toHaveClass("selected");
    expect(ratingFour).not.toHaveClass("selected");
    expect(ratingFive).not.toHaveClass("selected");
  });

  it("rating state is updated when a rating is clicked", () => {
    render(<Rating />);

    const ratingOne = screen.getByText("1");
    fireEvent.click(ratingOne);
    expect(ratingOne).toHaveClass("selected");

    const ratingTwo = screen.getByText("2");
    fireEvent.click(ratingTwo);
    expect(ratingTwo).toHaveClass("selected");

    const ratingThree = screen.getByText("3");
    fireEvent.click(ratingThree);
    expect(ratingThree).toHaveClass("selected");

    const ratingFour = screen.getByText("4");
    fireEvent.click(ratingFour);
    expect(ratingFour).toHaveClass("selected");

    const ratingFive = screen.getByText("5");
    fireEvent.click(ratingFive);
    expect(ratingFive).toHaveClass("selected");
  });

  it("submit is disabled if no rating is selected", () => {
    render(<Rating />);
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeDisabled();

    fireEvent.click(screen.getByText("1"));
    expect(submitButton).not.toBeDisabled();
  });

  it("thank you message is displayed when submitted state is true", () => {
    render(<Rating />);
    const ratingTwo = screen.getByText("2");
    const submitButton = screen.getByText("Submit");
    fireEvent.click(ratingTwo);
    fireEvent.click(submitButton);
    const thankyouContainer = screen.getByText("Thank you!");
    expect(thankyouContainer).toBeInTheDocument();
  });

  it("back button resets state when clicked", () => {
    render(<Rating />);
    const ratingTwo = screen.getByText("2");
    const submitButton = screen.getByText("Submit");
    fireEvent.click(ratingTwo);
    fireEvent.click(submitButton);
    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);
    const ratingSelectionScreen = screen.getByText("How did we do?");
    expect(ratingSelectionScreen).toBeInTheDocument();
  });
});
