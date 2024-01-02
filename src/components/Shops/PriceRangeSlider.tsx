import { useState } from 'react'
import { ImCross } from "react-icons/im";
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider';

export default function PriceRangeSlider() {
    const [minValue, setMinValue] = useState(25);
    const [maxValue, setMaxValue] = useState(25);

    function sliderChange ({ min, max }: { min: number; max: number }) {
      setMinValue(min);
      setMaxValue(max);
    }
  return (
    <div className="py-4 px-5">
        <h3 className="font-viga text-lg py-5">Price Range:</h3>
        <MultiRangeSlider
          min={0}
          max={2000}
          onChange={sliderChange}
        />
        <button className='py-2 px-4 w-full bg-primary text-white font-viga rounded-full my-4'>Apply Filter</button>
        <button className='flex justify-center items-center gap-4 py-2 px-4 w-full bg-white text-text-medium font-viga rounded-full border shadow'>
          <span>Clear All</span>
          <ImCross/>
        </button>
    </div>
  )
}
