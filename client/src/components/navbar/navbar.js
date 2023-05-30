import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSuiteSpotClick = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleSuiteSpotClick}>
          SuiteSpot
        </span>
        {user ? user.username : (<div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>)}
      </div>
    </div>
  );
};

export default Navbar;
