import Image from "next/image";
import { FC } from "react";
import { landings } from "../../../dummy/data";

const topLandings = landings.splice(0, 10);

const Landings: FC = () => {
  return (
    <div className="mb-4">
      <Image
        src="/images/bg/road.svg"
        alt="how to learn"
        layout="responsive"
        width={1190}
        height={199.44}
      />
      <div className=" text-center bg-[#181818] p-16 ">
        <h1 className="text-white text-[32px] pb-2">
          {" "}
          مسیرهای یادگیری و مجموعه‌های آموزشی{" "}
        </h1>
        <h4 className="text-white text-[16px] font-normal">
          هدف خود را انتخاب کنید و با مجموعه‌های آموزشی زیر به آن برسید.
        </h4>
      </div>
      <div className="bg-[#181818] pb-12 flex flex-wrap">
        <div className="container mx-auto">
          <div className=" w-[85%] mx-auto grid justify-center justify-items-center lg:grid-cols-2 md:grid-cols-1 xsm:grid-cols-1 gap-8">
            {topLandings.map((item) => (
              <div key={item.id} className="bg-white rounded-sm hover:bg-[#e8e8e8] w-full flex ">
                <div className="w-1/4 ml-2 p-3 h-[85px] ">
                  <Image
                    className="rounded-sm"
                    src={item.png_image}
                    alt={item.title}
                    //   layout="fill"
                    width={112}
                    height={64}
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-evenly ">
                  <div className="text-right text-sm">
                    <p className="text-sm">{item.title}</p>
                  </div>

                  <div className="flex flex-row justify-evenly text-sm text-[#e8e8e8] cursor-pointer">
                    <span className="text-[14px] font-light text-[#777575]">
                      {item.count_product} آموزش{" "}
                    </span>
                    |
                    <span className="text-[14px] font-light text-[#777575]">
                      {item.total_time} ساعت
                    </span>
                    |
                    <span className="text-[14px] font-light text-[#777575]">
                      {item.count_student} دانشجو
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-[#181818] pb-12">
        <button
          type="submit"
          className=" inline-flex items-center justify-center px-6 py-3 mt-8 rounded-sm text-white bg-blue-500 sm:w-auto sm:text-sm"
        >
          مشاهده همه
        </button>
      </div>
    </div>
  );
};

export default Landings;
