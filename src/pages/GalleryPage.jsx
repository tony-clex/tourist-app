// import "../assets";
import HeroSection from "../component/HeroSection";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Button } from "../component/Buttons";
import HeroHeadings from "../component/HeroSection/HeroHeadings";
import { GalleryItems } from "../constant";

const Gallery = () => {
  const images = [
    {
      src: "/public/images/Image Placeholder (20).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (19).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (21).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (23).png",
      alt: "Description",
    },
    {
      src: "/public/images/Image Placeholder (24).png",
      alt: "Description",
    },
    {
      src: "/public/images/Image Placeholder (21).png",
      alt: "Description",
    },
  ];

  const images1 = [
    {
      src: "/public/images/giraf.png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (18).png",
      alt: "Description ",
    },
    {
      src: "/public/images/bio.png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (17).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (16).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (15).png",
      alt: "Description",
    },
    {
      src: "/public/images/Image Placeholder (14).png",
      alt: "Description",
    },
    {
      src: "/public/images/Image Placeholder (13).png",
      alt: "Description",
    },
  ];

  const images2 = [
    {
      src: "/public/images/Image Placeholder (12).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (11).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (9).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (10).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (8).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (7).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (6).png",
      alt: "Description ",
    },
    {
      src: "/public/images/Image Placeholder (5).png",
      alt: "Description",
    },
  ];

  return (
    <>
      <Banner />
      <Header />
      <section>
        <div className="hero">
          <HeroSection />
          <div className="container section-heading-wrapper">
            {GalleryItems.map((items, index) => (
              <HeroHeadings
                key={index}
                title={items.title}
                name={items.name}
                image={items.image}
                substitle={items.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <div className="cta-section">
          <Button label="Open Instagram" style="primary" />
        </div>
      </div>
      <section className="gallery-section">
        <div className="container">
          <div className="gallery">
            <div className="gallery-items1">
              {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
            <div className="gallery-items2">
              {images1.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
            <div className="gallery-items3">
              {images2.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
