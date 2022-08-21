import Image from "next/image";
import Link from "next/link";
import { FaCartPlus, FaRegHeart, FaAngleLeft } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai"
import { BsFillHeartFill } from "react-icons/bs"
import { FC, ObjectHTMLAttributes, useState } from "react";
import { thousandSeprator } from "../../utils/helper";
// import TooltipModal from "../tooltipModal";
// import ReactTooltip from 'react-tooltip';

// interface IProduct {
//   image: any,
//   title: string,
//   id: number,
//   name: string
// }

interface ISlidCardProps {
  product: any;
}

const SlideCard: FC<ISlidCardProps> = (props) => {
  const { product } = props;
  console.log(product)
  const [tooltipShow, setTooltipShow] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const mouseEnterHandler = () => {
    setTooltipShow(true)
  }

  const mouseOutHandler = () => {
    setTooltipShow(false)
  }
  const likeHandel = () => {
    setIsFavorite(prev => !prev)
  }

  return (
    <div className="w-full mb-1 flex flex-col border border-[#0000001a] rounded-[3px] shadow-cardShadow cursor-pointer hover:shadow-md hover:shadow-amber-200 hover:border-amber-200 mx-0 ">
      <div className="w-full relative overflow-hidden object-cover h-full">
        <button
          className="absolute z-10 left-2 p-2 text-lg text-zinc-800"
          onClick={likeHandel}
        // onMouseEnter={mouseEnterHandler}
        // onMouseOut={mouseOutHandler}
        >
          {/*  //tooltip
           {
            tooltipShow &&
            <div className="absolute top-[-10] left-5">
              <TooltipModal />
            </div>
          } */}
          {
            isFavorite
              ?
              <BsFillHeartFill className="fill-red-700 " />
              :
              <FaRegHeart className="w-full h-full" />
          }
        </button>
        {/* <ReactTooltip  className="" /> */}
        {
          product.title.includes("وبینار") && <p className="bg-[#FFA500] z-30 text-xs text-white font-light absolute top-2 right-2 px-4 py-1 rounded-md">وبینار</p>
        }
        <Image
          layout="responsive"
          height={"128"}
          width={"248"}
          src={product.image}
          alt={product.title}
          className=""
        />
      </div>
      <div className="h-32 flex flex-col justify-between">
        <h3 className="text-sm text-gray-500 pt-4 px-4">
          <Link href={`/lessons/${String(product.id)}`}>
            <a className="text-[0.95rem] font-light">{product.title}</a>
          </Link>
        </h3>
        {
         product.title.includes("وبینار") && <p className="text-[0.95rem] text-gray-500 font-light pr-4">پنجشنبه, 3 شهریور 1401</p>
        }
      </div>
      <div className="h-[17%] bg-[#f7f7f7] flex items-center justify-between align-baseline ">
        <p className="font-light mr-4">

          {(() => {
            if (product.price == 10000) {
              return `در فرایند انتشار`
            } else if (product.price > 10000) {
               return `${thousandSeprator(product.price)} تومان `
            } else {
              return `رایگان!`
          }
          })()}

        </p>
        <div className="bg-[#5fbdec] text-white px-3 py-3">
          {
                      (() => {
                        if (product.price == 10000) {
                          return <FaAngleLeft className="mr-1 font-semibold text-2xl mx-1" />
                        } else if (product.price > 10000) {
                           return  <FaCartPlus className="font-semibold text-2xl mx-1" />
                        } else {
                          return <FaAngleLeft className="font-semibold text-2xl" />
                      }
                      })()
          }
         
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
