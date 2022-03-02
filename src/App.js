import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Pages/Form";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useState } from 'react'
import { Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";

function App() {
  const [user, setLoginUser] = useState({})

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/form' element={
          user && user._id ? <Form setLoginUser={setLoginUser} /> : <Navigate setLoginUser={setLoginUser} to='/login' />
        } />
        <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
        <Route path='/register' setLoginUser={setLoginUser} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;