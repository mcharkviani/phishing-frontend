import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>Phishing App</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
}
