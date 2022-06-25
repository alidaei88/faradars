import { FC } from "react";
import HomeCategories from "./categories";
import HomeHero from "./hero";
import Landings from "./landings";
import HomeSlider from "./slider";

const Home: FC = (props: any) => {

  return (
    <>
      <HomeHero />
      <HomeCategories />
      {
        !props.products ?
          <p> هیچ داده ای یافت نشد </p> :
          props.products.map((product: any, idx: number) => 
            <HomeSlider key={idx} data={product} />
          )
      }
      <Landings />
    </>
  );
};

export default Home;
