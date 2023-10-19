import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import Login from "./auth/Login";
// import AuthRoute from "./route/AuthRoute";
import MainRoute from "./route/MainRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoute />}>
          <Route index element={<Home />} />
          {/* <Route path="/auth" name='login' element={<AuthRoute />} /> */}
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
