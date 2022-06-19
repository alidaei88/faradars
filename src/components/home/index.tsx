import { FC } from "react";
import HomeCategories from "./categories";
import HomeHero from "./hero";
import HomeSlider from "./slider";

const Home: FC = (props: any) => {
  function renderSliders() {
    if (!props.products) {
      return <p>هیچ داده ای یافت نشد</p>;
    }
    return props.products.map((product: any, idx: number) => (
      <HomeSlider key={idx} data={product} />
    ));
  }
  return (
    <>
      <HomeHero />
      <HomeCategories />
      {renderSliders()}
      {/* <HomeSlider
        data={
          props.products && props.products.length > 0 ? props.products[0] : []
        }
      />
      <HomeSlider
        data={
          props.products && props.products.length > 0 ? props.products[1] : []
        }
      />

      <HomeSlider
        data={
          props.products && props.products.length > 0 ? props.products[2] : []
        }
      /> */}
      {/* <div className="grid grid-cols-12">
        <div className="col-span-5">1</div>
        <div className="col-span-5">1</div>
      </div> */}
    </>
  );
};

export default Home;
