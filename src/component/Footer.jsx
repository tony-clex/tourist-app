import SocialMedia from "./SocialMedia";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-details">
            <h3>If you have any question, Let us help you!</h3>
            <div className="footer-detail-item">
              <p className="footer-p">
                If you have any questions or would like to book a tour with us,
                please do not hesitate to contact us.
              </p>
              <div className="footer-span">
                <span>Phone: +250 788 123 456</span>
                <span>Email: info@rwandatourism.com </span>
                <span>Address: Kigali, Rwanda</span>
                
              </div>
              <div className="footer-subscribe">
                <h4>Subscribe to our newspaper</h4>
                <form action="" className="footer-form">
                  <input
                    type="text"
                    className="footer-input"
                    placeholder="Input your email here"
                  />
                  <button className="message">
                    <img src="/images/se.png" alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="social-links">
            <div className="footer-item">
              <div className="brand">
              <img
              className="logo"
              src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OIXTEHBoMp0v3sYrmft7a8HbfWMkS30hEUidZC3i8tCNFy59BFt45JM7aR7RXyi9zOh0jymydP9AsY9U0mXdmpEk3NNyON859VXBNRlUVWGFJfLPht0g72WnoKtbsqaMfyp00we7Wpcjcv3n-fD6Z2f8uO3d5enVq6bSxuSWm46HMkFHvnAK0hU0oEITKlvzQHADUzEAM-36DkDkUjTQzzSJ9a3glGTtZnYffi~AXtI8ZgJqSDnmwiWIpWBdyykn4B4W8Ll3x4Qor6FYHXBrTYYdyVIWJ4lnOh3kVK9dGSmmULpfxWsEqbEo4goJDSKbyIQshdODMR2mwKnVqgxjiQ__"
              alt="logo"
            />
                <SocialMedia />
              </div>
              <div className="p-footer">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <div className="footer-item-nav">
                  <ul>
                    <a href="">Home</a>
                    <a href="">Testimonials</a>
                    <a href="">Destination</a>
                    <a href="">signin</a>
                  </ul>

                  <ul>
                    <a href="">About us</a>
                    <a href="">Packages</a>
                    <a href="">Events</a>
                    <a href="">Gallery</a>
                  </ul>
                  <ul>
                    <a href="">Our Team</a>
                    <a href="">Blog</a>
                    <a href="">Contact us</a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>&copy; 2025 TourismSite. All rights reserved.</p>
      </footer>
    </>
  );
}
