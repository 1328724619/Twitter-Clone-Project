import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/HomePage/HomePage";
import Authentication from "./Component/Authentication/Authentication";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./Store/Auth/Action";

function App() {
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("App.js - JWT from localStorage:", jwt);
    console.log("App.js - Auth state:", auth);
    if (jwt) {
      dispatch(getUserProfile(jwt))
    }
  }, [jwt, dispatch])
  
  return (
    <div className="">
      <Routes>
        <Route
          path="/*"
          element={jwt ? <HomePage/> : <Authentication/>}>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
