import { Product } from "@/data/products";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductDetailCard({ product }: { product: Product }) {
    return (
        <div className="bg-white rounded-xl grid md:grid-cols-2 md:gap-8 w-full p-6">
            <div className="relative z-0">
                <Image width={226} height={286} src={product.image} alt={product.name} className="rounded-xl w-full" />
                <span className="font-viga absolute top-[1rem] right-0 rounded-l-full px-4 py-2 bg-primary bg-opacity-80">Sale!</span>
            </div>

            <div>
                <h3 className="font-viga text-2xl">{product.name}</h3>
                <div className="flex gap-4 pb-2">
                    <span className="text-red-600 font-bold text-xl">${product.discountPrice} </span>
                    {product.price && (<span className="text-gray-400 font-bold text-xl"> <del>${product.price}</del> </span>)}
                </div>
                <div className="pb-2 text-text-sub">
                    <span>Tags: </span>
                    {
                        product.tags.map((tag, i) => <span key={tag} className="font-bold">{i != 0 && ", "} {tag}</span>)
                    }
                </div>
                <div className="text-text-medium pb-4 whitespace-pre-line">
                    {product.description}
                </div>
                <button className="w-full rounded-full p-4 font-viga flex justify-center items-center text-white bg-primary gap-4">
                    <AiOutlineShoppingCart size={24}/>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}
