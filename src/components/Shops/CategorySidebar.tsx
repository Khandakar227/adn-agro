import { categories } from "@/data/categories";
import BaleIcon from "@/components/Shops/CategoriesIcon/Bale";
import DietFoodIcon from "@/components/Shops/CategoriesIcon/DietFoodIcon";
import HarvestIcon from "@/components/Shops/CategoriesIcon/HarvestIcon";
import HoneyIcon from "@/components/Shops/CategoriesIcon/HoneyIcon";
import OliveOil from "@/components/Shops/CategoriesIcon/OliveOil";
import SeedsIcon from "@/components/Shops/CategoriesIcon/SeedsIcon";
import SproutIcon from "@/components/Shops/CategoriesIcon/SproutIcon";
import WheatIcon from "@/components/Shops/CategoriesIcon/WheatIcon";

const categoryIcons:{[key: number]: JSX.Element} = {
    1: <HarvestIcon/>,
    2: <HoneyIcon />,
    3: <WheatIcon />,
    4: <SeedsIcon />,
    5: <SproutIcon />,
    6: <OliveOil />,
    7: <DietFoodIcon />,
    8: <BaleIcon />
  };

export default function CategorySidebar() {
  return (
    <>
    <div className="px-5">
        <p className="font-viga text-lg py-5">Categories:</p>
        <div className="text-sm lg:text-base">
        {
            categories.map(category => 
                <button key={category.label} className="hover:text-primary-light w-full flex gap-4 lg:gap-12 items-center py-2 text-text-medium font-viga">
                    {categoryIcons[category.id]}
                    <span>{category.label}</span>
                </button>
                )
        }
        </div>
    </div>   
    </>
  )
}
