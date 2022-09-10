import "./navBar.css";
import logo from "../../assets/groupLogo.svg";
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
            <li>Features</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;
