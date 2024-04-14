import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import UserDetails from "./details";
import { UserProvider } from "../contexts/userContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={
            <Box sx={{ maxWidth: 800, margin: "80px auto" }}>
              <Home />
            </Box>
            }>
          </Route>
          <Route path="/details" element={
            <Box sx={{ maxWidth: 800, margin: "80px auto" }}>
              <UserDetails />
            </Box>
            }>
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
