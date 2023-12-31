import { AiOutlineShoppingCart } from "react-icons/ai";

type ItemProps = {
    name: string;
    price?: number;
    image: string;
    discountPrice: number;
}

export default function ProductCard(props:ItemProps) {
  return (
    <div className="w-max max-w-64 mx-auto">
        <div className="relative z-0">
            <img className="rounded-lg w-full" src={props.image} alt={props.name} />
            <span className="font-viga absolute top-[1rem] right-0 rounded-l-full px-4 py-2 bg-primary bg-opacity-80">Sale!</span>
        </div>
        <h3 className="font-viga text-2xl py-2">{props.name}</h3>
        <div className="flex gap-4 pb-2">
            <span className="text-red-600 font-bold text-xl">${props.discountPrice} </span>
            {props.price && (<span className="text-gray-400 font-bold text-xl"> <del>${props.price}</del> </span>)}
        </div>
        <button className="w-full rounded-full p-4 font-viga flex justify-center items-center text-white bg-primary gap-4">
            <AiOutlineShoppingCart size={24}/>
            <span>Add to Cart</span>
        </button>
    </div>
  )
}
