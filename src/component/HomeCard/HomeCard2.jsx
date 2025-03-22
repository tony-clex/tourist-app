import PropTypes from "prop-types";
import { LearnMoreButton } from "../LearnMore";

export default function HomeCard2({ src, title, description }) {
  return (
    <>
      <div className="home-card">
        <img className="package-image" src={src} alt="title" />
        <h3 className="home-card-heading">{title}</h3>
        <p className="home-card-paragraph">{description}</p>
        <LearnMoreButton label="learn more" />
        <div className="home-button">{/* <Button label="Learn More" /> */}</div>
      </div>
    </>
  );
}

HomeCard2.propTypes = {
  src: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};
