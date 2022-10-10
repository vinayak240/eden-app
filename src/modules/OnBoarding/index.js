import React from "react";
import HorizontalStepper from "./components/HorizontalStepper";
import WorkspaceForm from "./pages/WorkspaceForm";
import { useNavigate, useParams } from "react-router-dom";
import EdenLogo from "../../assets/icons/EdenLogo";

export default function OnBoarding() {
  const { formIdx } = useParams();
  const navigate = useNavigate();

  const onStepClick = (step) => {
    if (formIdx > step) {
      navigate("/on-board/workspace/" + step);
    }
  };

  return (
    <div style={{ paddingBottom: "10%" }}>
      <div>
        <EdenLogo />
      </div>
      <HorizontalStepper nSteps={4} onStepClick={onStepClick} />
      <WorkspaceForm />
    </div>
  );
}
