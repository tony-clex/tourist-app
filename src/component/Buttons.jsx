// Button.js
// import "./App.css"
import PropTypes from "prop-types";

export function Button({ onClick, label, style = "primary" }) {
  return (
    <div className="centered-button-container">
      <button className={`button ${style}`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.string,
};
