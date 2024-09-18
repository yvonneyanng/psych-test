import { render, screen } from "@testing-library/react";
import Landing from "../components/Landing";
import { MockTranslationProvider } from "../utils/mockTranslationProvider";

describe("Landing component", () => {
  it("renders the start button", () => {
    render(
      <MockTranslationProvider>
        <Landing onStart={jest.fn()} />
      </MockTranslationProvider>
    );

    const startButton = screen.getByRole("button", { name: /start|開始測驗/ });
    expect(startButton).toBeInTheDocument();
  });
});
