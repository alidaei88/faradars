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
      <h3 className="my-6 mr-14 text-lg">{data.products.length > 0 && data.title}</h3>
      <Swiper
        className="container w-11/12"
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 18,
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
          <SwiperSlide key={product.id} className="mx-0">
            <SlideCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      {data.products.length > 0 && (
        <div>
          <Link href="#">
            <a>
              <button className=" inline-flex items-center justify-center px-12 py-3 mt-2 lg:ml-12 md:ml-9 sm:ml-7 xsm:ml-3 rounded-sm text-white text-sm font-medium bg-[#1e88e5] sm:w-auto float-left hover:bg-[#1774c6]">
                فهرست کامل <FaAngleLeft className="mr-1 font-semibold text-lg" />
              </button>
            </a>
          </Link>
        </div>
      )}
    </section>
  );
}
