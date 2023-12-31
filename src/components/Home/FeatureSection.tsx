import { FaBoxes } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { ReactNode } from "react";

function FeatureSection() {
  return (
    <div className="bg-white">
        <div className="bg-red-oval py-16">
            <div className="flex flex-wrap gap-4 justify-between items-start max-w-5xl mx-auto">
               <Feature icon={<FaBoxes size={50} className="text-gray-400"/>} title="50+" subtitle="Total Products"/>
                <Feature icon={<BsPeopleFill size={50} className="text-gray-400"/>} title="370+" subtitle="Total Customer"/>
                <Feature icon={<FaTruckFast size={50} className="text-gray-400"/>} title="590+" subtitle="Total Delivery"/>
            </div>
        </div>
    </div>
  )
}

function Feature(props:{icon:ReactNode, title:string, subtitle:string}) {
  return (
    <div className="w-max text-center mx-auto">
        <div className="flex items-center justify-center mb-2">
            {props.icon}
        </div>
        <p className="text-primary-dark text-4xl font-viga md:text-5xl">{props.title}</p>
        <p className="text-primary text-2xl font-viga md:text-3xl">{props.subtitle}</p>
    </div>
  )
}


export default FeatureSection