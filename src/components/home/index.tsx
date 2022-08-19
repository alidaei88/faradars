import { FC } from "react";
import HomeCategories from "./categories";
import HomeHero from "./hero";
import Landings from "./landings";
import HomeSlider from "./slider";
import Teaching from "./teaching";

const Home: FC = (props: any) => {
  const { lessons, searches } = props;

  return (
    <>
      <HomeHero tags={searches} />
      <HomeCategories />
      {!lessons.products ? (
        <p> هیچ داده ای یافت نشد </p>
      ) : (
        lessons.products.map((product: any, idx: number) => (
          <HomeSlider key={idx} data={product} />
        ))
      )}
      <Landings />
      <Teaching />
    </>
  );
};

export default Home;
