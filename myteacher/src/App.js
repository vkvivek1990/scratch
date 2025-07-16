import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./layout/menu";
import Userslist from "./views/usersList";
import Register from "./views/usersList/registration/register";
import Dashboard from "./views/dashboard/dashboard";
import Reports from "./views/reports/reports";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="bodyContainer">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/users" element={<Userslist />}></Route>
            <Route path="/registration" element={<Register />}></Route>
            <Route path="/reports" element={<Reports />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
