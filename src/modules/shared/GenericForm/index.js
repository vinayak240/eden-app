import React, { useEffect, useState } from "react";
import GenericFormField from "./components/GenericFormField";
import "./styles/form.css";

export default function GenericForm(props) {
  const { formConfig, submitLabel, onSubmit, formStore } = props;
  const [state, setState] = useState({});
  const [error, setError] = React.useState({});

  const bind = (evt) => {
    setState({
      ...state,
      [evt.target.id]: evt.target.value,
    });
  };

  const setValidationError = (id, msg) => {
    setError((err) => ({
      ...err,
      [id]: msg,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    let errorFlag = false;
    formConfig?.fields?.forEach((c) => {
      if (!state?.[c?.id]?.length && c?.required) {
        setValidationError(
          c?.id,
          c?.errorMsg || `${c?.label} is a Mandatory Field..`
        );
        errorFlag = true;
        return;
      }
      setValidationError(c?.id, "");
    });

    if (!errorFlag) {
      setError({});
      setState({});
      onSubmit(state);
    }
  };

  useEffect(() => {
    setState({ ...state, ...formStore });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formStore)]);

  return (
    <div>
      <p className="form_heading">{formConfig?.title}</p>
      <p className="form_caption">{formConfig?.caption}</p>
      <form className="form">
        {formConfig.fields?.map((field) => (
          <GenericFormField
            config={field}
            value={state?.[field?.id] || ""}
            bindCallback={bind}
            error={error?.[field?.id]}
          />
        ))}
        <button
          className="submit_btn"
          onClick={submit}
          onSubmit={submit}
          type="submit"
        >
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
