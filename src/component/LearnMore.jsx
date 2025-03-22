import PropTypes from "prop-types";

export function LearnMoreButton({ onClick, label, style = "primary" }) {
  return (
    <div className="learn">
      <button className={`button ${style}`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

LearnMoreButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.string,
};
