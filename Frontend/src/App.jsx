import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import AddEmployeePage from "./pages/AddEmployeePage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/create" element={<AddEmployeePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
