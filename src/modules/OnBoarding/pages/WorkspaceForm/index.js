import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormFieldMappers, STORAGE_KEY } from "../../../constants";
import GenericForm from "../../../shared/GenericForm";
import Completed from "./components/Completed";
import allForms from "./forms";

export default function WorkspaceForm() {
  const { formIdx } = useParams();
  const [state, setState] = useState({});
  const navigate = useNavigate();

  const getForm = () => {
    return (
      allForms?.find((form) => form?.form_id === Number(formIdx)) || allForms[0]
    );
  };

  const onSubmit = (formState = {}) => {
    let payload = {
      ...state,
      [formIdx]: { ...formState },
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

    setState(payload);

    navigate("/on-board/workspace/" + ((Number(formIdx) || 0) + 1));
  };

  useEffect(() => {
    let formStore = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    setState({ ...state, ...formStore });
  }, []);

  return (
    <div>
      {formIdx <= allForms?.length ? (
        <GenericForm
          formConfig={getForm()}
          submitLabel={"Create Workspace"}
          onSubmit={onSubmit}
          formStore={state?.[formIdx] || {}}
        />
      ) : (
        <Completed />
      )}
    </div>
  );
}
