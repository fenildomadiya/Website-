import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services.jsx"
import Trusted from "./Components/Trusted.jsx"

const Home = () => {
  const data = {
    name: "Feynill store",
  };

  return (
    <>
      <HeroSection mydata={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;