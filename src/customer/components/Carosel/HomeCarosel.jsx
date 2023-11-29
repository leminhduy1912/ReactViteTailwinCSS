import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { homeCaroselData } from "./HomeCarosel";
import image1 from "../../../../asset/download (3).jpg";
import image2 from "../../../../asset/download (5).jpg";

import image6 from "../../../../asset/test.jpg";
import image7 from "../../../../asset/test.jpg";
import image8 from "../../../../asset/test.jpg";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const homeCaroselData = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
];

const HomeCarosel = () => {
  const items = homeCaroselData.map((item, index) => {
    return (
      <div className="item" key={index}>
        <img className="cursor-pointer" src={item.image} />
      </div>
    );
  });
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
};

export default HomeCarosel;
