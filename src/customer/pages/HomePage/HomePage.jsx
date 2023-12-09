import HomeCarosel from "../../components/Carosel/HomeCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import Navbar from "../../components/Navigation";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 ">
        <HomeSectionCarosel />
      </div>
    </div>
  );
};

export default HomePage;
