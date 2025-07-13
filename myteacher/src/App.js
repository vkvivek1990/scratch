import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./layout/menu";
import Userslist from "./views/usersList";
import Register from "./views/usersList/registration/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/users" element={<Userslist />}></Route>
          <Route path="/registration" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
