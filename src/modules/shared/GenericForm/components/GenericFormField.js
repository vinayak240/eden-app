import React from "react";
import "../styles/form.css";

export default function GenericFormField(props) {
  const { config, bindCallback, value, error } = props;
  const CustomComponent = config?.component;
  return config?.custom ? (
    <CustomComponent
      config={config}
      value={value}
      bindCallback={bindCallback}
      error={error}
    />
  ) : (
    <div className="form_field">
      <label className="form_label" htmlFor={config?.id}>
        {config?.label}
        {!config?.required && <span className="input_caption">(optional)</span>}
      </label>
      <div
        style={{ borderColor: error?.length > 0 ? "red" : "lightgray" }}
        className="input_wrapper"
      >
        {config?.prefix?.length > 0 && (
          <p className="input_prefix">{config?.prefix}</p>
        )}
        <input
          className="form_input"
          id={config?.id}
          type={config?.type}
          value={value}
          onChange={bindCallback}
          placeholder={config?.placeholder}
        />
      </div>
      {error?.length > 0 && <p className="input_validation">{error}</p>}
    </div>
  );
}
