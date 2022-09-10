import "./navBar.css";
import logo from "../../assets/vocalLogo.svg";
import Button from "../button";
function NavBar() {
  return (
    <div>
      <div className="nav-container">
        <img src={logo} alt=""></img>
        <div className="list-container">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Dashboard</a></li>
          </ul>
        </div>
        <div className="signup-btn-container">
          <Button btnVariant="outline-button" btnText="Sign In" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
