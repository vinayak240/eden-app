import React from "react";
import Step from "./Step";
import { useParams } from "react-router-dom";
import "../styles/stepper.css";

export default function HorizontalStepper(props) {
  let { formIdx } = useParams();
  formIdx = Number(formIdx || 0);
  const { nSteps, onStepClick } = props;
  return (
    <div className="stepper_cntr">
      {Array.from({ length: nSteps }, (e, idx) => idx + 1).map((step) => (
        <div
          style={{ flexBasis: nSteps === step ? "auto" : "25%" }}
          className="step_wrapper"
        >
          <Step
            isActive={formIdx >= step}
            step={step}
            onStepClick={onStepClick}
          />
          {step < nSteps && (
            <div
              style={{
                background:
                  formIdx === step
                    ? "linear-gradient(to right, #5a4ad1 50%, lightgray 50%)"
                    : formIdx > step
                    ? " #5a4ad1"
                    : "lightgray",
              }}
              className="line"
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
