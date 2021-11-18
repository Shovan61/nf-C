import React from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import { HomePage, LoginPage } from "./Pages";

export function text() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={(navInfo) => (navInfo.isActive ? "active" : "")}
          ></NavLink>
        </li>
      </ul>
    </div>
  );
}

// Switch === Routes
// element
// exact
// Redirect to navigate
// /* starts with

// Navlink activeClassname doesn't exist anymore have to use
