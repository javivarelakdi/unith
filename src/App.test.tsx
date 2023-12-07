import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux";

describe("App", () => {
  it("renders loading state", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });
  it("renders content", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/Unith/i)).toBeInTheDocument();
    });
  });
});
