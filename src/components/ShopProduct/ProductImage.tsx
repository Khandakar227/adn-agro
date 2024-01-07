import { MutableRefObject } from "react"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active-product-image")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active-product-image")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

type ProductImageProps = {
    images: string[];
    product_name: string;
}

export default function ProductImage({images, product_name}:ProductImageProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider pb-4">
        {
            images.map((image, i) => 
            <Image
                key={i +" full " + image}
                src={image} alt={product_name}
                width={600} height={700}
                className="keen-slider__slide rounded-xl mx-auto shadow-sm max-w-sm w-full" />
            )
        }
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {
            images.map((image, i) => 
                <img
                    key={i + image}
                    src={image}
                    alt={product_name}
                    className="cursor-pointer w-20 rounded keen-slider__slide"
                />
            )
        }     
      </div>
    </>
  )
}
