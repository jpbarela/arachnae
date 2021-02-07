// @flow
import * as React from "react";
import { useForm } from "react-hook-form";
import { createUseStyles } from "react-jss";
import { useButtonStyles } from "../index";
import type { ButtonStyleProps } from "../index";
import { Row, useLayoutStyles } from "../Layout";
import type { LayoutProps } from "../Layout";

type FormProps<T> = {
  children: React.Node,
  onSubmit: (T) => void,
};

type InputProps = {
  name: string,
  testID?: string,
  defaultValue?: string,
  placeholder?: string,
  required?: boolean,
};

type OptionType = {
  value: string,
  name: string,
  testID?: string,
};

type SelectInputType = {
  name: string,
  options: OptionType[],
  testID?: string,
  required?: boolean,
};

type InputLayoutProps = {
  width: string,
};

type SubmitProps = {
  name: string,
  disabled?: boolean,
  testID?: string,
};

type FormContextValue = {
  errors: any,
  handleSubmit: (() => void) => void,
  register: ({
    required: { value: boolean, message: string },
    valueAsNumber?: boolean,
    valueAsdate?: boolean,
    pattern?: { value: RegExp, message: string },
  }) => void,
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

function BaseInput({
  name,
  placeholder,
  defaultValue,
  required,
  width,
  registerOptions,
  type,
  testID,
  step,
}: InputProps &
  LayoutProps & {
    registerOptions?: {
      valueAsNumber?: boolean,
      valueAsdate?: boolean,
      pattern?: { value: RegExp, message: string },
    },
    required?: boolean,
    step?: string,
    type?: string,
  }): React.Node {
  const { register, errors } = React.useContext(FormContext);
  const classes = useInputStyles();
  const layoutClasses = useLayoutStyles({ width });

  return (
    <div
      className={[width ? layoutClasses.layout : null, classes.container].join(
        " "
      )}
    >
      <Row>
        <input
          name={name}
          ref={register(
            Object.assign(
              {},
              { required: { value: !!required, message: "Required" } },
              registerOptions
            )
          )}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={classes.input}
          type={type}
          data-testid={testID}
          step={step}
        />
      </Row>
      {errors[name] ? (
        <Row className={classes.error}>{errors[name].message}</Row>
      ) : null}
    </div>
  );
}

export function DateInput(props: InputProps & LayoutProps): React.Node {
  return (
    <BaseInput
      {...props}
      registerOptions={{
        pattern: { value: /\d{4}-\d{2}-\d{2}/, message: "Format YYYY-MM-DD" },
        valueAsDate: true,
      }}
      type="date"
    />
  );
}

export function NumericInput(props: InputProps & LayoutProps): React.Node {
  return (
    <BaseInput
      {...props}
      registerOptions={{ valueAsNumber: true }}
      type="number"
      step="any"
    />
  );
}

export function SelectInput({
  name,
  options,
  required,
  testID,
  width,
}: SelectInputType & InputLayoutProps): React.Node {
  const { register, errors } = React.useContext(FormContext);
  const classes = useInputStyles();
  const layoutClasses = useLayoutStyles({ width });

  return (
    <div
      className={[width ? layoutClasses.layout : null, classes.container].join(
        " "
      )}
    >
      <Row>
        <select
          name={name}
          ref={register({ required: { value: true, message: "Required" } })}
          data-testid={testID}
          defaultValue=""
          className={classes.select}
        >
          <option value="" disabled />
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              data-testid={option.testID}
            >
              {option.name}
            </option>
          ))}
        </select>
      </Row>
      {errors[name] ? (
        <Row className={classes.error}>{errors[name].message}</Row>
      ) : null}
    </div>
  );
}

export function SubmitInput({
  name,
  disabled,
  color,
  margin,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
  testID,
}: SubmitProps & ButtonStyleProps): React.Node {
  const classes = useButtonStyles({
    color,
    disabled,
    margin,
    marginRight,
    marginLeft,
    marginTop,
    marginBottom,
  });

  return (
    <input
      type="submit"
      value={name}
      className={[classes.button, classes.common].join(" ")}
      data-testid={testID}
      disabled={disabled}
    />
  );
}

export function TextInput(props: InputProps & LayoutProps): React.Node {
  return <BaseInput {...props} />;
}

const useInputStyles = createUseStyles((theme) => {
  return {
    container: {
      paddingRight: "1rem",
    },
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
      fontSize: "1rem",
      width: "100%",
    },
    select: {
      fontSize: "1rem",
      width: "100%",
    },
  };
});
