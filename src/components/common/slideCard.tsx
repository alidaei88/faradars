import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { FC, ObjectHTMLAttributes } from "react";
import { thousandSeprator } from "../../utils/helper";

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
  return (
    <div className="w-full border border-l-amber-50 flex flex-col hover:shadow-md hover:shadow-amber-300 hover:border-amber-200 ">
      <div className="w-full overflow-hidden object-cover h-full">
        <Image
          layout="responsive"
          height={"128"}
          width={"248"}
          src={product.image}
          alt={product.title}
          className=""
        />
      </div>
      <div className="h-32">
        <h3 className="text-sm text-gray-500 pt-4 px-4">
          <Link href={`/lessons/${String(product.id)}`}>
            <a>{product.title}</a>
          </Link>
        </h3>
      </div>
      <div className="h-[17%] bg-[#f7f7f7] flex items-center justify-between align-baseline ">
        <p className="font-light mr-4">
          {product.price > 0
            ? `${thousandSeprator(product.price)} تومان `
            : `رایگان!`}
        </p>
        <div className="bg-[#5fbdec] text-white text-3xl px-4 py-2">
          <FaCartPlus className="p-1" />
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
