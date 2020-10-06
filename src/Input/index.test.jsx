// @flow
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DateInput, Input, NumericInput } from "./index";
import { ThemeProvider } from "react-jss";
import { defaultTheme } from "../Theme";

describe("Inputs", () => {
  describe("Input", () => {
    it("renders", () => {
      const container = render(
        <ThemeProvider theme={defaultTheme}>
          <Input />
        </ThemeProvider>
      );
      expect(container.baseElement.firstChild).toMatchSnapshot();
    });
  });

  describe("NumericInput", () => {
    it("renders", () => {
      const container = render(
        <ThemeProvider theme={defaultTheme}>
          <NumericInput />
        </ThemeProvider>
      );
      expect(container.baseElement.firstChild).toMatchSnapshot();
    });
  });

  describe("DateInput", () => {
    it("renders", () => {
      const container = render(
        <ThemeProvider theme={defaultTheme}>
          <DateInput />
        </ThemeProvider>
      );
      expect(container.baseElement.firstChild).toMatchSnapshot();
    });

    it("sets dates correctly", async () => {
      function DateInputContainer() {
        const [date, setDate] = React.useState(new Date(2020, 9, 1));

        return (
          <ThemeProvider theme={defaultTheme}>
            <DateInput value={date} setValue={setDate} testID={"dateInput"} />
          </ThemeProvider>
        );
      }
      const container = render(<DateInputContainer />);

      const dateInput = container.getByDisplayValue("2020-10-01");
      fireEvent.change(dateInput, { target: { value: "2020-10-15" } });
      expect(await container.findByDisplayValue("2020-10-15")).toBeTruthy();
    });
  });
});
