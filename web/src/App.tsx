import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import { ProblemList } from "./problems";
import NavBar from "./navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/problems" element={<ProblemList />} />
      </Routes>
    </div>
  );
}

export default App;
