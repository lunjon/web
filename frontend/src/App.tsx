import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import { Problem, ProblemList, ProblemStats } from "./problems";
import NavBar from "./navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/problems" element={<ProblemList />} />
        <Route path="/problems/stats" element={<ProblemStats />} />
        <Route path="/problems/:id" element={<Problem />} />
      </Routes>
    </div>
  );
}

export default App;
