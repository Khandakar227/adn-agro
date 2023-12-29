import { MouseEvent, PropsWithChildren, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function SaleItemCarousal(props: PropsWithChildren) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 580px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1, origin: "center", spacing: 5 },
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
    <div className="relative z-0 pl-8">
      <div ref={ref} className="keen-slider mx-auto">
        {props.children}
      </div>
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={prev}
            disabled={currentSlide === 0}
            className="disabled:text-gray-400 bg-white p-4 text-primary-dark rounded-l-full shadow-sm absolute left-0 top-1/2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
            className="disabled:text-gray-400 bg-white p-4 text-primary-dark rounded-r-full shadow-sm absolute right-0 top-1/2"
          >
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  );
}

export function CarouselItem(props: PropsWithChildren) {
  return <div className="keen-slider__slide flex justify-center">{props.children}</div>;
}
