import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideCard from "../../common/slideCard";

export default function HomeSlider(props: any) {
  const { data } = props;
  return (
    <section className="flex flex-col bg-white container mt-30 mx-auto md:px-12">
      <h3 className="my-4 text-lg">{data.products.length > 0 && data.title}</h3>
      <Swiper
        className="container"
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4.2,
            spaceBetween: 10,
          },
        }}
        navigation
        freeMode
      >
        {data.products.map((product: any) => (
          <SwiperSlide key={product.id} className="group">
            <SlideCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {data.products.length > 0 && (
        <div>
          <Link href="#">
            <a>
              <button className="w-full inline-flex items-center justify-center px-6 py-3 mt-8 rounded-sm text-white bg-blue-500 sm:w-auto sm:text-sm float-left">
                فهرست کامل <FaAngleLeft className="mr-1" />
              </button>
            </a>
          </Link>
        </div>
      )}
    </section>
  );
}
