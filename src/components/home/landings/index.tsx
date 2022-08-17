import Image from "next/image";
import { FC } from "react";
import { landings } from "../../../dummy/data";

const topLandings = landings.splice(0, 10);

const Landings: FC = () => {
  return (
    <>
      <Image
        src="/images/bg/road.svg"
        alt="how to learn"
        layout="responsive"
        width={1190}
        height={199.44}
      />
      <div className=" text-center bg-[#181818] pb-16 ">
        <h1 className="text-white text-[32px]">
          {" "}
          مسیرهای یادگیری و مجموعه‌های آموزشی{" "}
        </h1>
        <h4 className="text-white text-[14px]">
          هدف خود را انتخاب کنید و با مجموعه‌های آموزشی زیر به آن برسید.
        </h4>
      </div>
      <div className="bg-[#181818] pb-12 flex flex-wrap">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 xsm:grid-cols-1 gap-2 gap-y-4">
            {topLandings.map((item) => (
              <div key={item.id} className="bg-white w-[90%] p-2 flex  ">
                <div className="w-1/3 h-[88px]">
                  <Image
                    src={item.png_image}
                    alt={item.title}
                    //   layout="fill"
                    width={136}
                    height={88}
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-evenly ">
                  <div className="text-right text-sm">
                    <p className="text-sm">{item.title}</p>
                  </div>

                  <div className="flex flex-row justify-evenly text-sm text-[#777575]">
                    <span className="text-sm text-[#777575]">
                      {item.count_product}آموزش{" "}
                    </span>
                    |
                    <span className="text-sm text-[#777575]">
                      {item.total_time} ساعت
                    </span>
                    |
                    <span className="text-sm text-[#777575]">
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
          className="w-full inline-flex items-center justify-center px-6 py-3 mt-8 rounded-sm text-white bg-blue-500 sm:w-auto sm:text-sm"
        >
          مشاهده همه
        </button>
      </div>
    </>
  );
};

export default Landings;
