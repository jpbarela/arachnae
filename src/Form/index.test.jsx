import * as React from "react";
import { act, render, fireEvent, screen, waitFor } from "../test-utils";
import { Form, TextInput, SubmitInput } from "./index";

describe("SubmitInput", () => {
  test("it passes the form data to the handler", async () => {
    const submitHandlerMock = jest.fn();
    const form = render(
      <Form onSubmit={submitHandlerMock}>
        <TextInput
          name="testInput"
          placholder="Enter data here"
          defaultValue={"your data"}
        />
        <SubmitInput display="Submit" />
      </Form>
    );

    const testInputElement = screen.getByPlaceholderText(/Enter data here/i);
    fireEvent.input(testInputElement, { target: { value: "my data" } });
    const submitElement = screen.getByText(/Submit/);
    fireEvent.click(submitElement);
    await waitFor(() =>
      expect(submitHandlerMock).toHaveBeenCalledWith(
        { testInput: "my data" },
        expect.anything() // the submit event
      )
    );
  });
});
