import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
      items={items}
      responsive={responsive}
      autoPlay
      infinite
      disableButtonsControls
      autoPlayInterval={2500}
      disableDotsControls
    />
  );
};

export default HomeCarosel;
