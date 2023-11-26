import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Evaluation from "./pages/Evaluation";
import EvaluationFinish from "./pages/EvaluationFinish";
import EvaluationResults from "./pages/EvaluationResults";
import LoginPage from "./pages/LoginPage";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const token = localStorage.getItem("token");

  console.log('====================================');
  console.log("Loading...");
  console.log('====================================');

  useEffect(() => {
      if (token) {
          setAuthenticated(true);
      }
  }, [token]);

  return (
      <HashRouter>
          <Routes>
              <Route
                  path="/"
                  element={
                      authenticated ? (
                          <Navigate to="/home" />
                      ) : (
                          <LoginPage setAuthenticated={setAuthenticated} />
                      )
                  }
              />
              <Route
                  path="/home"
                  element={
                      /* authenticated ?  */ <Home /> /* : <Navigate to="/" /> */
                  }
              />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/evaluation/:id" element={<Evaluation />} />
              <Route path="/evaluationfinish" element={<EvaluationFinish />} />
              <Route
                  path="/evaluationresults/:idProject"
                  element={<EvaluationResults />}
              />

              <Route
                  path="/logout"
                  element={<Logout setAuthenticated={setAuthenticated} />}
              />
          </Routes>
      </HashRouter>
  );
}

export default App;


const Logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
};

function Blogs() {
    return <h2>blog</h2>;
}
