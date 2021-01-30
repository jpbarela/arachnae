// @flow
import * as React from "react";
import { useForm } from "react-hook-form";
import { createUseStyles } from "react-jss"

type FormProps<T> = {
  children: React.Node,
  onSubmit: (T) => void,
};

type InputProps = {
  name: string,
  defaultValue?: string,
  placholder?: string,
};

type SubmitProps = {
  display: string,
  color: string,
};

type FormContextValue = {
  handleSubmit: (() => void) => void,
  register: () => void,
};

const FormContext = React.createContext(({}: FormContextValue));

export function Form({ children, onSubmit }: FormProps<T>) {
  const { register, handleSubmit } = useForm();

  return (
    <FormContext.Provider value={{ register, handleSubmit }}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormContext.Provider>
  );
}

export function TextInput({ name, placholder, defaultValue }: InputProps) {
  const {register} = React.useContext(FormContext)

  return (
    <input
      name={name}
      ref={register}
      defaultValue={defaultValue}
      placeholder={placholder}
    />
  );
}

export function SubmitInput({ display, color }: SubmitProps) {
  const classes = useFormStyles({color});

  return <input type="submit" value={display} className={classes.submit}/>;
}

const useFormStyles = createUseStyles((theme) => {
  return {
    submit: {
      background: theme.button.primary,
      borderRadius: "10px",
      borderStyle: "none",
      color: ({ color }) => color || theme.button.color,
    },
  };
});
