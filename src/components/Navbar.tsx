import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import LoginButton from "./LoginButton";

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <Link to="calculation">Calculation</Link>
          </li>
          <li>
            <Link to="offset">Finance Climate Contribution</Link>
          </li>
          <li style={{ flexGrow: 1, display: "flex" }}>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
