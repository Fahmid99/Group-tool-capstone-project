import Button from "./components/button";
import "./homePage.css";
import scrollLogo from "./assets/scrollLogo.svg";
function HomePage() {
  return (
    <div className="homepage-container">
      <div className="body-container">
        <p className="body-welcome">Welcome to</p>
        <h1 className="body-heading">Vocaled</h1>
        <h2 className="body-heading-two">It’s time to be heard</h2>
        <p className="body-description">
          A group manangement tool that takes group work
          <br /> to the next level where all voices are heard
          <br /> and everyone is <p className="vocal-text">Vocal.</p>
        </p>
        <div className="body-btn">
          <Button btnVariant="outline-button" btnText="Let's Begin" />
        </div>
      </div>

      <div className="scroll-logo-container">
        <img className="scroll-logo" src={scrollLogo} alt=""></img>
      </div>
    </div>
  );
}

export default HomePage;
