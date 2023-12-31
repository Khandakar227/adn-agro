import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.css"
import { MouseEvent, useState } from "react";
import { Category } from "@/data/categories";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type CategoryBarProps = {
    active: Category;
    setActive: Function;
    categories:Category[];
}

const CategoryBar = ({categories, active, setActive}:CategoryBarProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
  
    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slides: {perView: 'auto', spacing: 10},
      loop: false,
      mode: "snap",
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    });

    function prev(e: MouseEvent) {
        e.stopPropagation();
        instanceRef.current?.prev();
      }
    function next(e: MouseEvent) {
    e.stopPropagation();
    instanceRef.current?.next();
    }
    
    return (
            <div className="relative z-0 px-16">
                <div ref={ref} className="keen-slider">
                    {
                        categories.map(category => 
                            <div key={"category " + category.label} className="keen-slider__slide inline-table">
                                <button
                                className={`underline underline-offset-8 p-2 font-viga whitespace-pre ${active.id == category.id ? "text-primary-light" : "text-text-medium"}`}
                                onClick={() => setActive(category)}
                                >
                                {category.label}
                                </button>
                            </div>
                        )
                    }
                </div>
                {loaded && instanceRef.current && (
                <>
                    <button
                        onClick={prev}
                        disabled={currentSlide === 0}
                        className="disabled:text-primary-light disabled:bg-gray-300 bg-primary p-4 text-white rounded-l-full shadow-sm absolute left-0 top-0"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                        }
                        className="disabled:text-primary-light disabled:bg-gray-300 bg-primary p-4 text-white rounded-r-full shadow-sm absolute right-0 top-0"
                    >
                        <FaChevronRight />
                    </button>
                </>
        )}
            </div>
    )
}

export default CategoryBar;