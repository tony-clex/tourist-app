import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import HeroSection from "../component/HeroSection";
import SectionHeading from "../component/SectionHeading";
import { Button } from "../component/Buttons";

export default function AboutPage() {
  return (
    <>
      <Banner />
      <Header />
      <section className="about-hero">
        <div className=" section-heading-wrapper about-us-hero-content">
          <SectionHeading
            title="We are dedicated to
            providing the best travel experience"
            subtitle="Discover the Land of a Thousand Hills"
            alignment="left"
          />
        </div>
        <div className="container">
          <div className="about-form">
            <div className="hero-form">
              <form action="" className="form-inputs" id="form-details">
                <div className="input-field" id="input-field-id">
                  <div className="hero-guest-input">
                    Guest
                    <select name="guest" id="user-guest" className="guest">
                      <option value="age-group" default>
                        2 Adult
                      </option>
                      <option value="age-group" default>
                        Adult
                      </option>
                    </select>
                  </div>
                  <div className="date">
                    Date
                    <select name="calendar" id="calendar">
                      <option value="calendar">12 - 13 April 2022</option>
                    </select>
                  </div>
                  <div className="packages">
                    Packages
                    <select name="all" id="all-option">
                      <option value="all">Akagera Tour</option>
                      <option value="all">All</option>
                    </select>
                  </div>
                </div>
                <Button label="Book Now" style="background-color-green" />
              </form>
            </div>
          </div>
        </div>
        <img
          className="about-us-hero-image"
          src="https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lEeXOd~NLNPd6XCObmaV~zYBNm9loEoJ1NvGhDzAS3tzPeqCWiWX1o6C5BYe3keqsQN~wJZ64D9ZWQJ5WtmhsJlLB2wANUv-WnZrUfV4PN1b2hlMdcYEzrx7~8SDhxyuLI2fOHkTZrxygDFM5Q5jYmO5fxd1NsG4DHXyAEE2hxpWlrRqY-An9QaPqxX8xNxeFhVK0wHJoEheRCDbAtpQorKciMybMefiYlRwIdhvmsGWydn~xwRG8XEDUWvD-1KERe7zjZWTKK4rgEbHptT63iSM-hjpk9DFWkn1SC~M9lw~GTkmJm4p3RtCnd3dNPqsAjGP2xsDMwB~OxCpim2nGg__"
          alt="monkeys"
        />
      </section>
      <div className="container safari-africa-blog">
        <div className="safari-heading">
          <h2 className="wizzy-safari-heading">
            Welcome to Africa Wizzy Safari
          </h2>
          <div className="safari-green-bold"></div>
        </div>

        <div className="about-africa-safari">
          <div className="image-wrap">
            <img
              src="https://s3-alpha-sig.figma.com/img/8c88/8b29/002577f7500b2ab4a99aaa7d8e6be7f0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DUkVYW5a4CbNunraibl-GG7aMsQNNvoVw0yGlq8O9dBkUxlNeXHYM2tANom84NHHLPRISnSsBgK63Jz2gklASXl3TdtuNcwjMw7hyKOoXqormxHAUnWMU8-6HlqEZW5g3BPsfTZvlT4upmY3O4ERzAmBg2qIWmjfCs9Wcb6ePfnEKJHBgh9rdHKQnklHH2TQ6T3PUcEyecIsb7sXai1pGLAwTb3YUbkT6qTBAVmWc8lk5QDQDh6Hzxz39jO4qA0vzJhqDcvoROue2xB1B74dBr2gcDEioVIjPlneT-Zv~zK7~VNpcVLdLMKeonv6CZ14dqvxo6szudfy~xIxJ74n6g__"
              alt=""
            />
          </div>
          <div className="safari-content">
            <p>
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          
          </div>
        </div>
        <div className="about-africa-safari">
          <div className="safari-content">
            <p>
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          </div>
          <div className="image-wrap">
            <img
              src="https://s3-alpha-sig.figma.com/img/7600/56f9/b94a31ecc9af090ab219a5e6a933a894?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XivZg41K-e32KCsVbIeOJ6pNGbC8ig7FsHrf9K6h~UVud7789Vr2Xi6gamrtpCJ4nHV9xbKHwDNX-7MLVrHaE8zbHxJ11AhuHUS39vLE5k6HPs7fB8a6PmRkiPuHuitbr22FdsZ7v3lbVuxnhemOzthLyFDKSnu5Iv-w4QoI6CZxjSb9TLI~q5n8XeHGQMluE65kZPD0gG1bXIECQ-ldh0wUCfYuoKZdrRtR5DGBfmr4LH~JBORCiYZf7Se~O-RuZN6cLKjflPfslnh1R9BqIOQ4hGcTeh3mNUbhwChbYNy7~kN6MVG7oy58tPzI9Dbme-NMzP4saKdehPzYLofDpg__"
              alt=""
            />
          </div>
        </div>
        <div className="about-africa-safari">
          <div className="image-wrap">
            <img
              src="https://s3-alpha-sig.figma.com/img/fd63/971c/9ce5d2804ffd9f32ac67720292bd35a8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tXckDIaPbPgmvrNgwpW19trCyoIUx6g3T386gckX7e9gE6EMPsbLlb6ITwebYf7jPapTcpLTx4a-0IhpujhfNsPRAC45LnIfwKPseB66tdTyjvwM47Fv3xn6AxIqfZb6LQU43kRIRG8KBzcD4j1sUK0q41THbXLvOLM7gmCz9bI0XW4smG~ax~o7yrGUDN4zZ1BedEV7nIPq0BF8joZ-mA~qansWTq7ipar1pbrQedjkibYlhCXKjIoPlQv0jV9lntCqfGL~tFShSQos1lYqYhZFOS0XDnCpJ6P03~cHdI8NlkJCUH1saatKTY6ql6LRVsUuVgBTTYeqKAXgCzUTwQ__"
              alt=""
            />
          </div>
          <div className="safari-content">
            <p>
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
