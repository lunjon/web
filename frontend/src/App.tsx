import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import { ErrorContainer } from "./errors/context";
import { Problem, ProblemList, ProblemStats } from "./problems";
import NavBar from "./navbar";

function App() {
  return (
    <div className="App">
      <ErrorContainer>
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/problems" element={<ProblemList />} />
          <Route path="/problems/stats" element={<ProblemStats />} />
          <Route path="/problems/:id" element={<Problem />} />
        </Routes>
      </ErrorContainer>
    </div>
  );
}

export default App;
