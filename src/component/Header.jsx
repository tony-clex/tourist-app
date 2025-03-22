import { Link } from "react-router-dom";
import { Button } from "./Buttons";

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="brand-logo">
            <img
              className="logo"
              src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OIXTEHBoMp0v3sYrmft7a8HbfWMkS30hEUidZC3i8tCNFy59BFt45JM7aR7RXyi9zOh0jymydP9AsY9U0mXdmpEk3NNyON859VXBNRlUVWGFJfLPht0g72WnoKtbsqaMfyp00we7Wpcjcv3n-fD6Z2f8uO3d5enVq6bSxuSWm46HMkFHvnAK0hU0oEITKlvzQHADUzEAM-36DkDkUjTQzzSJ9a3glGTtZnYffi~AXtI8ZgJqSDnmwiWIpWBdyykn4B4W8Ll3x4Qor6FYHXBrTYYdyVIWJ4lnOh3kVK9dGSmmULpfxWsEqbEo4goJDSKbyIQshdODMR2mwKnVqgxjiQ__"
              alt="logo"
            />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/package">Tour package</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
          <Button label="SignIn" />
          {/* <Button label="learn more" /> */}
        </div>
      </div>
    </>
  );
}
