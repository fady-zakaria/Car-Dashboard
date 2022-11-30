import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Topbar from "../src/components/Topbar/Topbar";
import Booking from "../src/components/Booking/Booking";
import SignIn from "./pages/Sign/SignIn";
import SignUp from "./pages/Sign/SignUp";
import SellCars from "./components/SellCars/SellCars";
import Settings from "./components/Settings/Settings";
import SettingsButtons from "./components/SettingsButtons/SettingsButtons";

function App() {
  const location = useLocation();

  // useEffect(()=>{

  // },[])

  return (
    <>
      {location.pathname !== "/signin" && location.pathname !== "/signup" && (
        <div className="app">
          <Sidebar />
          <Topbar />
          <div className="tabs">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/dashboard" element={<Dashboard />} />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/sellcars" element={<SellCars />} />
              <Route
                path="/settings"
                element={
                  <Navigate
                    to="/settings/profile"
                    element={<SettingsButtons />}
                  />
                }
              />
              <Route path="/settings" element={<Settings />}>
                <Route
                  path="/settings/:settingsbtn"
                  element={<SettingsButtons />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      )}

      <div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
