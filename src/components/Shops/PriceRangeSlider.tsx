import { useState } from 'react'

export default function PriceRangeSlider() {
    const [minValue, setMinValue] = useState(25);
    const [maxValue, setMaxValue] = useState(25);
  return (
    <div className="py-4 px-5">
        <h3 className="font-viga text-lg py-5">Price Range:</h3>

    </div>
  )
}
