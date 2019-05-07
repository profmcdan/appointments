import React from "react";
import ReactDOM from "react-dom";
import Appointment from "../src/components/Appointment";
import AppointmentDayView from "../src/components/AppointmentDayView";

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
    render(customer);
    expect(document.body.textContent).toMatch("Ashley");
  });

  it("renders another customer first name", () => {
    customer = { firstName: "Jordan" };
    render(customer);
    expect(document.body.textContent).toMatch("Jordan");
  });
});

describe("AppointmentDayView", () => {
  let container;
  const today = new Date();
  let appointments = [
    { startsAt: today.setHours(12, 0) },
    { startsAt: today.setHours(13, 0) },
  ];
  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = appointments => {
    document.body.appendChild(container);
    return ReactDOM.render(
      <AppointmentDayView appointments={appointments} />,
      container,
    );
  };

  it("render a div with the right id", () => {
    render(appointments);
    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders multiple appointments in an ol tag", () => {
    render(appointments);
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(
      appointments.length,
    );
  });
});
