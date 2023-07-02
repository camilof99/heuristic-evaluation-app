import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Home from "./pages/home";
import Projects from "./pages/projects";
import Evaluation from "./pages/Evaluation";
import EvaluationFinish from "./pages/EvaluationFinish";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
      if (token) {
          setAuthenticated(true);
      }
  }, [token]);

  return (
      <BrowserRouter>
          <Routes>
              <Route
                  path="/"
                  element={
                      authenticated ? (
                          <Navigate to="/home" />
                      ) : (
                          <LoginForm setAuthenticated={setAuthenticated} />
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
                  path="/logout"
                  element={<Logout setAuthenticated={setAuthenticated} />}
              />
          </Routes>
      </BrowserRouter>
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
