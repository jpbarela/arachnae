// @flow
import * as React from "react";
import { StyleSheet, css } from "aphrodite";

type InputProps = {
  placeholder?: string,
  value?: ?string,
  setValue?: string => void
};

type NumericInputProps = {
  placeholder?: string,
  value?: ?number,
  setValue?: number => void
};

export function Input({ placeholder, value, setValue }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      value={value == null ? "" : value}
      onChange={event => (setValue ? setValue(event.target.value) : null)}
      className={css(styles.input)}
    />
  );
}

export function NumericInput({
  placeholder,
  value,
  setValue
}: NumericInputProps) {
  return (
    <input
      type="number"
      placeholder={placeholder}
      value={value == null ? "" : value}
      onChange={event =>
        setValue ? setValue(parseFloat(event.target.value)) : null
      }
      className={css(styles.input)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "250px"
  }
});
