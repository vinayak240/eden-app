import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Modules from "./modules";

function App() {
  return (
    <div>
      <Router>
        <Modules />
      </Router>
    </div>
  );
}

export default App;
