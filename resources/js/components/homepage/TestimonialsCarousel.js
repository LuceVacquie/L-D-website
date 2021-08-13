import React, { useState, useRef, useEffect } from 'react'
import { FirstTestimonial, SecondTestimonial } from './Testimonials'

const slides = [
    {
        id: 'first slide',
        component: FirstTestimonial()
    }, 
    {
        id: 'second slide',
        component: SecondTestimonial()
    }, 
]

const delay = 9000

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
        
        <section className="bg-white overflow-hidden w-full lg:pb-24">
                <div className="lg:grid lg:grid-cols-3">
                    
                    <div className="relative w-full pt-28 pb-12 lg:py-18 col-span-2 lg:grid-flow-row">
                        <h2 className="pb-24 text-2xl font-semibold tracking-wider text-amber-600 uppercase text-center">Testimonials</h2>
                        {/* Slides */}
                        <div 
                            className="whitespace-nowrap transition duration-1000 ease md:mx-10 " 
                            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                        >
                            {slides.map((slide) => (
                                <div className="px-10 md:px-0 whitespace-normal inline-block w-full relative" key={slide.id}>
                                    {slide.component}
                                </div>
                            ))}
                        </div>
                        {/* Dots */}
                        <div className="relative w-full text-center z-10">
                            {slides.map((_, idx) => (
                                <div 
                                    className="inline-block h-4 w-4 rounded-full pointer m-6 bg-teal-600 active:bg-teal-800" 
                                    key={idx}
                                    onClick={() => {setIndex(idx)}}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block lg:flex-shrink-0 z-10">
                            <img
                            className="h-full w-auto"
                            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                            alt=""
                            />
                    </div>
                </div>
      </section>
    )
}
export default HeroCarousel
