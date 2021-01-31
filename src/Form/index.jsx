// @flow
import * as React from "react";
import { useForm } from "react-hook-form";
import { createUseStyles } from "react-jss";
import { useButtonStyles } from "../index";
import type { ButtonStyleProps } from "../index";

type FormProps<T> = {
  children: React.Node,
  onSubmit: (T) => void,
};

type InputProps = {
  name: string,
  defaultValue?: string,
  placeholder?: string,
};

type SubmitProps = {
  display: string,
};

type FormContextValue = {
  handleSubmit: (() => void) => void,
  register: () => void,
};

const FormContext = React.createContext(({}: FormContextValue));

export function Form<T>({ children, onSubmit }: FormProps<T>): React.Node {
  const { register, handleSubmit } = useForm();

  return (
    <FormContext.Provider value={{ register, handleSubmit }}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormContext.Provider>
  );
}

export function TextInput({
  name,
  placeholder,
  defaultValue,
}: InputProps): React.Node {
  const { register } = React.useContext(FormContext);
  const classes = useInputStyles();

  return (
    <input
      name={name}
      ref={register}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={classes.input}
    />
  );
}

export function SubmitInput({
  display,
  color,
}: SubmitProps & ButtonStyleProps): React.Node {
  const classes = useButtonStyles({ color });

  return <input type="submit" value={display} className={classes.button} />;
}

const useInputStyles = createUseStyles((theme) => {
  return {
    input: {
      borderTop: "0",
      borderLeft: "0",
      borderRight: "0",
      borderBottom: `2px solid ${theme.input.borderColor}`,
    },
  };
});

const useInputStyleStyles = createUseStyles({
  width: ({ width }) => width,
});
