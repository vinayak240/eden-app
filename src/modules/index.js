import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import OnBoarding from "./OnBoarding";
import WorkspaceForm from "./OnBoarding/pages/WorkspaceForm";

export default function Modules(params) {
  const { formIdx } = useParams();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/on-board/workspace/1" replace={true} />}
        />
        <Route path="/on-board">
          <Route path="workspace/:formIdx" element={<OnBoarding />} />
        </Route>
      </Routes>
    </div>
  );
}
