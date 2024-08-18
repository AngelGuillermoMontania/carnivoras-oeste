import { useEffect } from "react";
import galeryHome1 from "../assets/images/galeryHome1.jpg";
import galeryHome2 from "../assets/images/galeryHome2.jpg";
import galeryHome3 from "../assets/images/galeryHome3.jpg";
import galeryHome4 from "../assets/images/galeryHome4.jpg";
import galeryHome5 from "../assets/images/galeryHome5.jpg";
import galeryHome6 from "../assets/images/galeryHome6.jpg";
import galeryHome7 from "../assets/images/galeryHome7.jpg";
import galeryHome8 from "../assets/images/galeryHome8.jpg";
import galeryHome9 from "../assets/images/galeryHome9.jpg";
import scrollreveal from "scrollreveal";

export default function GaleryImageHome() {
  const data = [
    { imageLink: galeryHome1 },
    { imageLink: galeryHome2 },
    { imageLink: galeryHome3 },
    { imageLink: galeryHome4 },
    { imageLink: galeryHome5 },
    { imageLink: galeryHome6 },
    { imageLink: galeryHome7 },
    { imageLink: galeryHome8 },
    { imageLink: galeryHome9 },
  ];

  useEffect(() => {
    scrollreveal().reveal(".reveal", {
      delay: 500,
      interval: 100,
      origin: "bottom",
      distance: "700px",
      opacity: 0.1,
      scale: 0.1,
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-24 px-36">
      {data.map(({ imageLink }, index) => (
        <div key={index} className="reveal">
          <img
            className="h-96 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}
