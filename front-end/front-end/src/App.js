import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AllPeeps from "./components/AllPeeps.jsx";
import AddPeeps from "./components/AddPeeps.jsx";
import Home from './components/Home.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import "./App.css"



function App() {

  const [user, setLoginUser] = useState({});


  useEffect(() => {
    console.log(user)
  }, [user]);


  return (

    <main>

      <div className="header">
        <h1>Chitter Challenge App</h1></div>
      <div className="shortview">
        <hr></hr>
        <>

          <Routes>
            <Route exact path="/"
              element={
                <>
                  {user && user._id ? <Home setLoginUser={setLoginUser} user={user} /> : <Login setLoginUser={setLoginUser} />}
                </>
              } />
            <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allpeeps" element={<AllPeeps setLoginUser={setLoginUser} user={user} />} />
            {/* <Route path="/addpeeps" element={<AddPeeps username={user.name} />} /> */}
            <Route exact path="/addpeeps"
              element={
                <>
                  {user && user._id ? <AddPeeps username={user.name} handle={user.handle} /> : <Login setLoginUser={setLoginUser} />}
                </>
              } />
          </Routes>

        </>
        <hr />
      </div>
      <div className="Footer">
        <p>Created by Isabel Jones </p></div>

    </main>
  );
}


export default App;
