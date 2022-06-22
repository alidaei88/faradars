/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSlider(props: any) {
  console.log(props);
  const { data } = props;
  function renderSlides() {
    return data.products.map((product: any) => (
      <SwiperSlide key={product.id} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={`/lessons/${String(product.id)}`}>
                <a>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.title}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
      </SwiperSlide>
    ));
  }
  return (
    <section className="bg-white container mx-auto md:px-10">
      <h3 className="my-4">{data.title}</h3>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
        spaceBetween={15}
        slidesPerView={3.5}
        navigation
        freeMode
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {renderSlides()}
      </Swiper>
    </section>
  );
}
