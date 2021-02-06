import * as React from "react";
import { act, render, fireEvent, screen, waitFor } from "../test-utils";
import {
  DateInput,
  Form,
  NumericInput,
  SelectInput,
  SubmitInput,
  TextInput,
} from "./index";
import { default as each } from "jest-each";

describe("TypedInput", () => {
  each([
    ["DateInput", DateInput, "2020-01-01", new Date(Date.UTC(2020, 0, 1))],
    ["NumericInput", NumericInput, "7", 7],
    ["TextInput", TextInput, "an input", "an input"],
  ]).test(
    "%s passes valus to the handler",
    async (_name, Input, value, expected) => {
      const submitHandlerMock = jest.fn();
      const form = render(
        <Form onSubmit={submitHandlerMock}>
          <Input
            name="testInput"
            placeholder="Enter data here"
            testID="testInput"
          />
          <SubmitInput name="Submit" />
        </Form>
      );

      const testInputElement = screen.getByTestId("testInput");
      fireEvent.input(testInputElement, { target: { value } });
      const submitElement = screen.getByText(/Submit/);
      fireEvent.click(submitElement);
      await waitFor(() =>
        expect(submitHandlerMock).toHaveBeenCalledWith(
          { testInput: expected },
          expect.anything() // the submit event
        )
      );
    }
  );

  each([
    ["DateInput", DateInput],
    ["NumericInput", NumericInput],
    ["TextInput", TextInput],
  ]).test("%s required inputs stop submission", async (_name, Input) => {
    const submitHandlerMock = jest.fn();
    const form = render(
      <Form onSubmit={submitHandlerMock}>
        <Input
          name="testInput"
          placeholder="Enter data here"
          required={true}
          testID="testInput"
        />
        <SubmitInput name="Submit" />
      </Form>
    );

    const submitElement = screen.getByText(/Submit/);
    fireEvent.click(submitElement);
    await waitFor(() =>
      expect(screen.getAllByText(/Required/i)).toHaveLength(1)
    );
    expect(submitHandlerMock).not.toHaveBeenCalled();
  });
});

describe("NumericInput", () => {
  test("it passes NaN if input is not a number", async () => {
    const submitHandlerMock = jest.fn();
    const form = render(
      <Form onSubmit={submitHandlerMock}>
        <NumericInput
          name="testInput"
          placeholder="Enter data here"
          testID="testInput"
        />
        <SubmitInput name="Submit" />
      </Form>
    );

    const testInputElement = screen.getByTestId("testInput");
    fireEvent.input(testInputElement, { target: { value: "ab0.7.8" } });
    const submitElement = screen.getByText(/Submit/);
    fireEvent.click(submitElement);
    await waitFor(() =>
      expect(submitHandlerMock).toHaveBeenCalledWith(
        { testInput: 0 },
        expect.anything() // the submit event
      )
    );
  });
});

describe("SelectInput", () => {
  test("it passes the form data to the handler", async () => {
    const submitHandlerMock = jest.fn();
    const form = render(
      <Form onSubmit={submitHandlerMock}>
        <SelectInput
          name="testInput"
          options={[
            { value: "a", name: "option a", testID: "value_a" },
            { value: "b", name: "option b", testID: "value_b" },
          ]}
          testID="testInput"
        />
        <SubmitInput name="Submit" />
      </Form>
    );

    const testInputElement = screen.getByTestId("testInput");
    fireEvent.change(testInputElement, { target: { value: "b" } });
    const submitElement = screen.getByText(/Submit/);
    fireEvent.click(submitElement);
    await waitFor(() =>
      expect(submitHandlerMock).toHaveBeenCalledWith(
        { testInput: "b" },
        expect.anything() // the submit event
      )
    );
  });

  test("required inputs stop submission", async () => {
    const submitHandlerMock = jest.fn();
    const form = render(
      <Form onSubmit={submitHandlerMock}>
        <SelectInput
          name="testInput"
          options={[
            { value: "a", name: "Option A", testID: "value_a" },
            { value: "b", name: "Option B", testID: "value_b" },
          ]}
          testID="testInput"
          required={true}
        />
        <SubmitInput name="Submit" />
      </Form>
    );

    const submitElement = screen.getByText(/Submit/);
    fireEvent.click(submitElement);
    await waitFor(() =>
      expect(screen.getAllByText(/Required/i)).toHaveLength(1)
    );
    expect(submitHandlerMock).not.toHaveBeenCalled();
  });
});
