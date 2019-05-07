import React from "react";
import ReactDOM from "react-dom";
import Appointment from "../src/components/Appointment";

describe("Appoitnemt", () => {
  let customer;
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = customer => {
    document.body.appendChild(container);
    return ReactDOM.render(<Appointment customer={customer} />, container);
  };

  it("renders customer first name", () => {
    customer = { firstName: "Ashley" };
    render(customer, container);
    expect(document.body.textContent).toMatch("Ashley");
  });

  it("renders another customer first name", () => {
    customer = { firstName: "Jordan" };
    render(customer, container);
    expect(document.body.textContent).toMatch("Jordan");
  });
});
