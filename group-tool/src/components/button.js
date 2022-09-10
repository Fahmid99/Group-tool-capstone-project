import "./button.css";

function Button({ btnText, btnVariant }) {
  return (
    <div>
      <button className={btnVariant}>{btnText}</button>
    </div>
  );
}

export default Button;
