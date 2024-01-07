import { atom, useAtom } from "jotai"
import { ChangeEvent } from "react";

const quantityToBuy = atom(0);

export default function ProductQuantityButton() {
    const [quantity, setQuantity] = useAtom(quantityToBuy);

    const changeQuantity = (e:ChangeEvent) => {
        const val = (e.target as HTMLInputElement).value;
        setQuantity(+val);
    }
    const decrement = () => {
        setQuantity(p => p> 0 ? --p : p);
    }
    const increment = () => {
        setQuantity(p => ++p);
    }

  return (
    <div className="flex bg-white rounded-full max-w-max font-viga">
        <button onClick={decrement} className="hover:shadow-md px-5 py-3 rounded-full outline-none">-</button>
        <input type="number" min={0} className="max-w-24 w-full text-center py-1 px-2 outline-none hide-arrows" value={quantity} inputMode="numeric" onChange={changeQuantity} />
        <button onClick={increment} className="hover:shadow-md px-5 py-3 rounded-full outline-none">+</button>
    </div>
  )
}
