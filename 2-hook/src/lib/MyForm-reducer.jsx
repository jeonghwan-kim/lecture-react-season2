import React from "react";

const getInitialState = (values) => ({
  values,
  errors: {},
  touched: {},
});

const formReducer = (state, action) => {
  if (action.type === "SET_VALUES") {
    return {
      ...state,
      values: {
        ...state.values,
        [action.name]: action.value,
      },
    };
  }
  if (action.type === "SET_TOUCHED") {
    return {
      ...state,
      touched: {
        ...state.touched,
        [action.name]: true,
      },
    };
  }
  if (action.type === "SET_TOUCHED_ALL") {
    return {
      ...state,
      touched: Object.keys(state.values).reduce((touched, field) => {
        touched[field] = true;
        return touched;
      }, {}),
    };
  }
  if (action.type === "VALIDATE") {
    return {
      ...state,
      errors: action.validate(state.values),
    };
  }

  throw new Error(`Unknown action: ${action}`);
};

export const useForm = ({ initialValue, validate, onSubmit }) => {
  const [state, dispatch] = React.useReducer(
    formReducer,
    getInitialState(initialValue)
  );

  const handleChange = (e) => {
    dispatch({
      type: "SET_VALUES",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleBlur = (e) => {
    dispatch({ type: "SET_TOUCHED", name: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "SET_TOUCHED_ALL" });

    const nextState = formReducer(state, { type: "VALIDATE", validate });
    if (Object.values(nextState.errors).some(Boolean)) return;

    onSubmit(nextState.values);
  };

  const getFieldProps = (name) => {
    const value = state.values[name];
    const onBlur = handleBlur;
    const onChange = handleChange;

    return {
      name,
      value,
      onBlur,
      onChange,
    };
  };

  React.useEffect(() => {
    dispatch({ type: "VALIDATE", validate });
  }, [state.values]);

  return {
    ...state,
    handleBlur,
    handleChange,
    handleSubmit,
    getFieldProps,
  };
};

const formContext = React.createContext({});
formContext.displayName = "FormContext";

export const Form = ({ id, className, children, ...rest }) => {
  const formValue = useForm(rest);
  return (
    <formContext.Provider value={formValue}>
      <form
        noValidate
        id={id}
        className={className}
        onSubmit={formValue.handleSubmit}
      >
        {children}
      </form>
    </formContext.Provider>
  );
};

export const Field = ({ as = "input", children, ...rest }) => {
  const { getFieldProps } = React.useContext(formContext);
  return React.createElement(
    as,
    { ...rest, ...getFieldProps(rest.name) },
    children
  );
};

export const ErrorMessage = ({ name }) => {
  const { touched, errors } = React.useContext(formContext);
  if (!touched[name] || !errors[name]) return null;
  return <span>{errors[name]}</span>;
};
