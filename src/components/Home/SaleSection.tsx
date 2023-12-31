import { IconType } from "react-icons";
import { TbTruck } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { TbSeeding } from "react-icons/tb";
import SaleItem from "../ProductCard";
import SaleItemCarousal, { CarouselItem } from "./SaleItemCarousel";


export default function SaleSection() {
  return (
    <>
        <div className="pt-16 px-4">
            <h3 className="text-3xl text-center font-viga">Best Sellers This Week</h3>
            <p className="text-center py-2 max-w-lg mx-auto text-text-sub">Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio pellentesque diam</p>
            <div className="py-3 flex flex-wrap justify-center gap-6 mx-auto max-w-5xl items-center">
                <FeatureCard key={11} icon={TbTruck} title={"Fast Delivery"} subtitle="Within 2-3 hours after ordering"/>
                <FeatureCard key={21} icon={FaRegClock} title={"Opening Hours"} subtitle="Mon.-Fri.: 9.00 am - 9.00 pm"/>
                <FeatureCard key={31} icon={TbSeeding} title={"Eco packaging"} subtitle="Sustainable materials"/>
            </div>

        </div>
        <div className="py-16">
            <h3 className="text-3xl text-center font-viga">On Sale</h3>
            <div className="py-8 max-w-5xl mx-auto">
                <SaleItemCarousal>
                    <CarouselItem>
                        <SaleItem name="Fresh Strawberry" image="/item.jpg" price={12.99} discountPrice={8.99}/>
                    </CarouselItem>
                    <CarouselItem>
                        <SaleItem name="Fresh Strawberry" image="/item.jpg" price={12.99} discountPrice={8.99}/>
                    </CarouselItem>
                    <CarouselItem>
                        <SaleItem name="Fresh Strawberry" image="/item.jpg" price={12.99} discountPrice={8.99}/>
                    </CarouselItem>
                    <CarouselItem>
                        <SaleItem name="Fresh Strawberry" image="/item.jpg" price={12.99} discountPrice={8.99}/>
                    </CarouselItem>
                </SaleItemCarousal>
            </div>
        </div>
    </>
  )
}

const FeatureCard = (props:{icon:IconType, title: string, subtitle:string}) => {
    return (
        <div className="text-primary-dark shadow bg-white p-5 rounded-lg flex justify-between items-center w-full sm:w-max">
            <props.icon size={50} className="mr-6"/>
            <div className="border-l pl-6">
                <h4 className="text-lg font-viga">{props.title}</h4>
                <p>{props.subtitle}</p>
            </div>
        </div>
    )
}