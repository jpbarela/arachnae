// @flow
import * as React from "react";
import { useForm } from "react-hook-form";
import { createUseStyles } from "react-jss";
import { useButtonStyles } from "../index";
import type { ButtonStyleProps } from "../index";
import { Row } from "../Layout";

type FormProps<T> = {
  children: React.Node,
  onSubmit: (T) => void,
};

type InputProps = {
  name: string,
  defaultValue?: string,
  placeholder?: string,
  required?: boolean,
};

type InputLayoutProps = {
  width: string,
};

type SubmitProps = {
  display: string,
};

type FormContextValue = {
  errors: any,
  handleSubmit: (() => void) => void,
  register: () => void,
};

const FormContext = React.createContext(({}: FormContextValue));

export function Form<T>({ children, onSubmit }: FormProps<T>): React.Node {
  const { errors, handleSubmit, register } = useForm();

  return (
    <FormContext.Provider value={{ errors, handleSubmit, register }}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormContext.Provider>
  );
}

export function TextInput({
  name,
  placeholder,
  defaultValue,
  required,
  width,
}: InputProps & InputStyleProps): React.Node {
  const { register, errors } = React.useContext(FormContext);
  const classes = useInputStyles();
  const layoutClasses = useInputLayoutStyles({ width });

  return (
    <div className={width ? layoutClasses.layout : null}>
      <Row>
        <input
          name={name}
          ref={register({ required })}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={classes.input}
        />
      </Row>
      {errors[name] ? <Row className={classes.error}>Required</Row> : null}
    </div>
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
    error: {
      color: theme.error,
      fontSize: "small",
      width: "100%",
    },
    input: {
      borderTop: "0",
      borderLeft: "0",
      borderRight: "0",
      borderBottom: `2px solid ${theme.input.borderColor}`,
      width: "100%",
    },
  };
});

const useInputLayoutStyles = createUseStyles({
  layout: {
    width: ({ width }) => width,
  },
});
