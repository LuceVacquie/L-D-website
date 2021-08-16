import { Doughnut } from 'react-chartjs-2';
import CountUp from 'react-countup';


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

  return (
    <div className="relative bg-gradient-to-t from-teal-900 to-emerald-500 pt-16 pb-32 overflow-hidden">

        {/* First row, full width */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
            <div className="text-xl text-amber-600 pt-12">
                We've changed the life to
            </div>
            <div className="text-white text-9xl font-extrabold">
               <CountUp start={0} end={3462} duration={2} delay={0} />
               <span className="text-8xl"> trainees recorded</span>
            </div>
            <p className="text-xl text-gray-400 pt-12">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                egestas fringilla sapien.
            </p>
            
        </div>

        {/* Second block, divided into two columns */}
        <div className="mt-24 grid lg:grid-cols-4 lg:gap-12 lg:mx-auto lg:max-w-7xl lg:px-8">
            {/* First block */}
            <div className="col-span-2">
                <div className="text-xl text-amber-600">
                    Companies that put their destiny in our hands
                </div>
                <div className="text-white text-9xl font-extrabold uppercase">
                    Five
                </div>
            </div>
            {/* Second block */}
            <div className="col-span-2">
                <div className="text-xl text-amber-600">
                    Training added to the training schedule
                </div>
                <div className="text-white text-6xl font-extrabold">
                    23,775 items
                </div>
                <p className="text-xl text-gray-400">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                    aliquam. Quisque id at vitae feugiat egestas ac.
                </p>
            </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-12 lg:mx-auto lg:max-w-7xl lg:px-8">
            {/* Third block */}
            <div className="col-span-1">
                <div className="text-xl text-amber-600">
                    Safe systems of work
                </div>
                <div className="text-white text-8xl font-extrabold">
                    17,319 
                </div>
                <div className="text-white text-4xl font-bold">
                    completed on the app
                </div>
            </div>
            {/* Forth block */}
            <div className="col-span-2">
                <div className="grid lg:grid-cols-2">
                    <div className="text-amber-600 font-extrabold text-right" style={{fontSize: '10rem'}}>
                        84 
                    </div>
                    <div className="text-white text-6xl font-extrabold">
                        Users, team leaders & admin added
                    </div>
                </div>
            </div>
            {/* Fith block */}
            <div className="col-span-2 pr-24">
                <div className="text-xl text-amber-600">
                    Training added to the training schedule
                </div>
                <div className="text-white text-6xl font-extrabold">
                    23,775 items
                </div>
                <p className="text-xl text-gray-400">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                    aliquam. Quisque id at vitae feugiat egestas ac.
                </p>
            </div>
            {/* Sith block */}
            <div className="col-span-1">
                <div className="text-white text-8xl font-extrabold">
                    4,380
                </div>
                <div className="text-amber-600 text-4xl font-bold">
                    Reports downloaded
                </div>
            </div>
        </div>

        {/* Graph block */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
            {/* Title */}
            <div className="text-white text-6xl font-extrabold">
                What you'll save every month
            </div>
            {/* Graph & labels */}
            <div className="flex m-auto pt-12 justify-evenly">
                <div>
                    <div className="text-emerald-600">Financial savings</div>
                    <div className="text-white">Reduction in time for administration tasks</div>
                    <div className="text-amber-600">Reduction in time for training input & preparation</div>
                </div>
                <div className="w-96 h-96">
                    <Doughnut data={data}/>
                </div> 
            </div>
        </div>
        
    </div>
  )
}

export default StatContent