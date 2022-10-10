import React from "react";

export default function Step(props) {
  const { step, onStepClick, isActive } = props;
  return (
    <div
      style={{
        background: isActive ? "#5a4ad1" : "white",
        color: isActive ? "white" : "black",
        border: isActive ? "none" : "1px solid lightgray",
      }}
      className="step"
      onClick={() => onStepClick(step)}
    >
      {step}
    </div>
  );
}
