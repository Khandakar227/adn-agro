import { useState } from 'react'
import { ImCross } from "react-icons/im";
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider';
import { initialFilter, useFilter } from '@/hooks/useFilter';

export default function PriceRangeSlider() {
    const [filter, setFilter] = useFilter();
    const [minValue, setMinValue] = useState(initialFilter.minAmount);
    const [maxValue, setMaxValue] = useState(initialFilter.maxAmount);

    function onApplyFilter () {
      setFilter(prev => ({...prev, minAmount:minValue, maxAmount:maxValue}));
    }

    function clearAll() {
      setMinValue(initialFilter.minAmount);
      setMaxValue(initialFilter.maxAmount);
      setFilter(initialFilter);
    }

  return (
    <div className="py-4 px-5">
        <h3 className="font-viga text-lg py-5">Price Range:</h3>
        <MultiRangeSlider
          min={0}
          max={2000}
          maxVal={maxValue}
          minVal={minValue}
          setMaxVal={setMaxValue}
          setMinVal={setMinValue}
        />
        <button onClick={onApplyFilter} className='py-2 px-4 w-full bg-primary text-white font-viga rounded-full my-4'>Apply Filter</button>
        <button onClick={clearAll} className='flex justify-center items-center gap-4 py-2 px-4 w-full bg-white text-text-medium font-viga rounded-full border shadow'>
          <span>Clear All</span>
          <ImCross/>
        </button>
    </div>
  )
}
