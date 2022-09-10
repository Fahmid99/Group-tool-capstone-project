import NavBar from "./components/navbar/navBar";
import "./homePage.css";
function HomePage() {
  return (
    <div className="homepage-container">
      <NavBar />
      <div className="body-container">
        <p className="body-welcome">Welcome to</p>
        <h1 className="body-heading">Vocaled</h1>
        <h2 className="body-heading-two">It’s time to be heard</h2>
        <p className="body-description">
          A group manangement tool that takes group work
          <br /> to the next level where all voices are heard
          <br /> and everyone is Vocal.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
