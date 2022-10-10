import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import OnBoarding from "./OnBoarding";

export default function Modules(params) {
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
