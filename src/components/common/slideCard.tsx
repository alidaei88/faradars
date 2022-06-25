import Image from "next/image"
import Link from "next/link"
import { FaCartPlus } from "react-icons/fa";
import { FC, ObjectHTMLAttributes } from "react"

// interface IProduct {
//   image: any,
//   title: string,
//   id: number,
//   name: string
// }

interface ISlidCardProps {
  product: any,
}

const SlideCard: FC<ISlidCardProps> = (props) => {
  const { product } = props
  console.log(product.title, product.name)
  return (
    <div className="w-full h-[290px] border border-l-amber-50 flex flex-col hover:shadow-md hover:shadow-amber-300 hover:border-amber-200 ">
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
      <div className="h-[36%] pb-">
        <h3 className="text-sm text-gray-500 pt-2 pr-5">
          <Link href={`/lessons/${String(product.id)}`}>
            <a>
              {product.title}
            </a>
          </Link>
        </h3>

      </div>
      <div className="h-[17%] bg-[#f7f7f7] flex items-center justify-between align-baseline ">
        <p className="text-gray-900 text-l mr-2">{product.price > 0 ? `${product.price} تومان ` : `رایگان!`}</p>
        <div className="bg-[#5fbdec] text-white text-3xl p-2">
          <FaCartPlus />
        </div>
      </div>
    </div>
  )
}

export default SlideCard