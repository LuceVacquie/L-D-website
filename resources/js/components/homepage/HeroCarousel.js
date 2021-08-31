import React, { useState, useRef, useEffect } from 'react'
import { FirstHeroSection, SecondHeroSection, ThirdHeroSection} from './HeroSlides'

const slides = [
    {
        id: 'first slide',
        component: FirstHeroSection()
    }, 
    {
        id: 'second slide',
        component: SecondHeroSection()
    }, 
    {
        id: 'third slide',
        component: ThirdHeroSection()
    }
]

const delay = 5000

const HeroCarousel = () => {
    
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)

    const resetTimeout = () => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
  }, [index]);

    return(
        
        <div className="overflow-hidden w-full">

            <div 
                className="whitespace-nowrap transition duration-1000 ease" 
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
            {slides.map((slide) => (
                <div className="whitespace-normal inline-block w-full relative h-screen" key={slide.id}>
                    {slide.component}
                </div>
            ))}
            </div>

            <div className="absolute w-full text-center z-10 -mt-44">
            {slides.map((_, idx) => (
                <div 
                    className="inline-block h-4 w-4 rounded-full pointer m-6 bg-lightTeal active:bg-turquoise" 
                    key={idx}
                    onClick={() => {setIndex(idx)}}
                ></div>
            ))}
            </div>
        </div>
   
    )
}
export default HeroCarousel
