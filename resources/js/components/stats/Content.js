import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const data = {
    datasets: [
        {
            label: 'Savings per month',
            data: [44, 56],
            backgroundColor: ['#FFFFFF', '#10B981'],
            borderColor: ['#10B981', '#10B981'],
            borderWidth: 2
        },
        {
            label: 'Reduction in time for administration tasks',
            data: [46, 54],
            backgroundColor: ['#FFFFFF', '#0D9488'],
            borderColor: ['#0D9488', '#0D9488'],
            borderWidth: 2
        },
        {
            label: 'Reduction in time for training input & preparation',
            data: [49, 51],
            backgroundColor: ['#FFFFFF', '#D97706'],
            borderColor: ['#D97706', '#D97706'],
            borderWidth: 2
        },
    ],
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        },
    }
};

const StatContent = () => {

    const [focus, setFocus] = useState(false)


  return (
    <div className="relative bg-gradient-to-t from-teal-900 to-emerald-600 pt-16 pb-32 overflow-hidden">

        {/* First row, full width */}
        <div className="mx-auto px-8 lg:max-w-7xl lg:px-12">
            <div className="text-xl text-amber-600 pt-12">
                We've changed the life to
            </div>
            <div className="text-white text-6xl md:text-8xl lg:text-9xl font-extrabold">
               <CountUp start={focus ? 0 : null} end={3462} duration={2} redraw={true}>
                    {( { countUpRef } ) => (
                        <VisibilitySensor onChange={isVisible => {if(isVisible){setFocus(true)}}} delayedCall>
                            <span ref={countUpRef}/>
                        </VisibilitySensor>
                    )}
               </CountUp>
               
               <span className="text-3xl md:text-7xl lg:text-8xl"><br/> trainees recorded</span>
            </div>
            <p className="text-gray-400 md:text-xl md:pt-12">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                egestas fringilla sapien.
            </p>
            
        </div>

        {/* Second block, divided into two columns */}
        <div className="mt-12 md:mt-24 md:grid mx-auto px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12 lg:max-w-7xl lg:px-12">
            {/* First block */}
            <div className="lg:col-span-2">
                <div className="text-xl text-amber-600">
                    Companies that put their destiny in our hands
                </div>
                <div className="text-white text-7xl md:text-9xl font-extrabold uppercase">
                    Five
                </div>
            </div>
            {/* Second block */}
            <div className="pt-12 md:pt-0 lg:col-span-2">
                <div className="text-xl text-amber-600">
                    Training added to the training schedule
                </div>
                <div className="text-white text-4xl md:text-6xl font-extrabold">
                    23,775 items
                </div>
                <p className="text-gray-400 md:text-xl">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                    aliquam. Quisque id at vitae feugiat egestas ac.
                </p>
            </div>
        </div>

        <div className="mt-12 mx-auto px-8 md:grid md:grid-cols-2 items-center lg:grid-cols-3 lg:grid-rows-2 lg:gap-12 lg:max-w-7xl lg:px-12">
            {/* Third block */}
            <div className="lg:col-span-1">
                <div className="text-xl text-amber-600">
                    Safe systems of work
                </div>
                <div className="text-white text-6xl md:text-8xl font-extrabold">
                    17,319 
                </div>
                <div className="text-white text-3xl font-bold">
                    completed on the app
                </div>
            </div>
            {/* Forth block */}
            <div className="lg:col-span-2">
                <div className="pt-12 md:pt-0 md:grid md:grid-cols-2"> 
                    <div className="text-amber-600 font-extrabold text-8xl md:text-right md:text-10xl">
                        84
                    </div>
                    <div className="text-white self-center text-3xl lg:text-6xl font-extrabold">
                        Users, team leaders & admin added
                    </div>
                </div>
            </div>
            {/* Fith block */}
            <div className="pt-12 col-span-2 md:pr-12 lg:pr-24">
                <div className="text-xl text-amber-600">
                    Training added to the training schedule
                </div>
                <div className="text-white text-4xl md:text-6xl font-extrabold">
                    23,775 items
                </div>
                <p className="text-gray-400 md:text-xl">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                    aliquam. Quisque id at vitae feugiat egestas ac.
                </p>
            </div>
            {/* Sith block */}
            <div className="pt-12 col-span-2 lg:pt-0 lg:col-span-1">
                <div className="text-white text-6xl md:text-8xl font-extrabold">
                    4,380
                </div>
                <div className="text-amber-600 font-bold text-3xl md:text-4xl">
                    Reports downloaded
                </div>
            </div>
        </div>

        {/* Graph block */}
        <div className="mx-auto px-8 pt-24 lg:max-w-7xl lg:px-12">
            {/* Title */}
            <div className="text-white text-4xl md:text-6xl font-extrabold">
                What you'll save each month
            </div>
            {/* Graph & labels from medium devices and above*/}
            <div className="hidden md:flex m-auto pt-12 justify-evenly items-center">
                <div className="text-xl lg:text-2xl">
                    <div className="text-emerald-400">
                        <span className="text-2xl font-bold lg:text-4xl">56% </span>
                        Financial savings
                    </div>
                    <div className="text-teal-400 pt-8">
                        <span className="text-2xl font-bold lg:text-4xl">54% </span>
                        Reduction in time for administration tasks
                    </div>
                    <div className="text-amber-600 pt-8">
                        <span className="text-2xl font-bold lg:text-4xl">51% </span>
                        Reduction in time for training input & preparation
                    </div>
                </div>
                <div className="flex items-center w-72 h-72 md:w-96 md:h-96">
                    <Doughnut data={data}/>
                </div> 
            </div>
            {/* Graph & labels from small devices to medium*/}
            <div className="md:hidden flex m-auto pt-12 justify-evenly">
                <div className="text-white">
                    <div className="">
                        <span className="text-emerald-400 text-4xl font-bold">56%</span>
                        <br/> 
                        Financial savings
                    </div>
                    <div className="pt-8">
                        <span className="text-teal-400 text-4xl font-bold">54%</span>
                        <br/> 
                        Reduction in time for administration tasks
                    </div>
                    <div className="pt-8">
                        <span className="text-amber-600 text-4xl font-bold">51%</span>
                        <br/> 
                        Reduction in time for training input & preparation
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default StatContent