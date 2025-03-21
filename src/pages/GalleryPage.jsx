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
      src: "https://s3-alpha-sig.figma.com/img/5e52/ced2/071eff545d1b16dd4bc36fd771859d9d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Em2S2e09wYAQmfAW2cswHV3DWnXqi4yn0bvoMHYUhcK4s9g~wz~3t3gxaiqxG8ZagvnfbJtnSbja5yKjr-Oe0TAUtwP-KKm-oNbdeqXjQxJ3d6-LXXCoswUPYh~ztJyQexetdTSkuhUEmYupwA9FW-Lb4ZQyYQKB-xg-Wa0e~wZznMrZ8n3ciEOVk21Xr7RUlhAmJkm2r3EfPQ8lqIfTxp2XuPLyQ~ghLcZ-8nI2wplMK3ZX0j4w~hPvzR0UBqhnhfwow5S4eTTHX5v4DAdSHiHTP90LO52UIp10Sub4DvgjBoAckIyrHIGeULEE5BO8bQg2KrNCgndWx9gW4pddPA__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/efdb/cec2/a35932c0e5b21dfbfb30629b08803e12?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PFsmB8VQoP3ABMEIltsB8oSMrpbTcwi-IXB5U06kSO8t8wtio1sGShi4hwBhI95V5XV4C8F2cu-uEajYgIUSJRz0fT2kPEOCwEZ0cPg7SNM0wrTnHsQ6WUQp9U~UNHbjk4SmYX6Q5IbTOTvyQtutnCeYfvt80vbhDUnmyzaseYUpjbVKL7fgcIL6abgBwcFg7TN072VFmuNG2oaDweuckKYb93IV7QdjcyH63VPjsQkUx4yWCDsBQXCX1r8GSvsiL55CDslJE~CQuqjFRgEBh3dMYnNjkYYqCVXKN~ayn6PJhyt5p9y2YsY4fw-hteMbctWMC-ionrIDQVu~QmiwWA__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/7f97/05cf/efd22d0a9bd512eb96d8b30fd398822a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IXw6c7hWMd~SPfTsoFsMf1ua7YrTjEBSzqz5o~pvOPb9fBeo1e1i5R52Bvfqq8ATplWpWkE9SquFkMJPN4nyroVxBFtXI95f6QjkG6oMv5ONHmDuA9MT-VIgBUOZXGDajHMAgvSghDpYUHw4jKpiat2BzLh8AShdmGriqdZhTpHVJSVDeTuRFhIDbkjx41~UJO0s0FoLsNde5L37-Gc6nb8mppVphsdq3EAxrv3a7yEgaBVpt1owMSpexh5LYyzMFJQj2upY6XmBx5TG6OYr1EadhkaiXcQ-xTkYHCJfh6Y5ZMiqTlW-t7L26~8XQNikntHAJoXslcw~6E1i5CHimw__",
      alt: "Description ",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/45cc/6e79/677858ce7ddeaf45db374c0f14abedc9?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EioQ2Jb93g2~-uM22pe5jTUFHSKDjNixU8R7GmUK71xZSV7mNynKVpUA73eCja1VFgLc5b1hLT-UcIKM6rv5B1cmWkAS4pLUnqclSI796wFaaDqgUs8w~3HTIe9Og~8bJ1XVa-3k~Dhn4V2PbVr3yqsT~GFZMa6WN62pLxdlE2q1WTIAa9mm0vjjjU-LRxGIIYZAUKM~G5218fWEnRDUwZaoErYqZOjDd5A6wm1wo7iUhsOl04~yFNs~wjGN5yZTSuwLIbax4KTro8IG48-X7~dg~9MhSbZDBkQe9mjnVbZx5oxWkRBWSTuuql8ghFuHQ-XCIrnOxmvJs~cJ5sVf0Q__",
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
