import HeroSection from "./Components/HeroSection";
import { useProductContext } from "./Context/Product";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "feynill Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection mydata={data} />
    </>
  );
};

export default About;