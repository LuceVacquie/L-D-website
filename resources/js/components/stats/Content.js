import { Chart } from 'chart.js'

const StatContent = () => {
    let ctx = document.getElementById("chart");

    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['with L&D', 'without L&D'],
            datasets: [{
                label: 'Percent',
                data: [45.87, 54.13],
                backgroundColor: ['#0D9488', '#F0FDFA'],
                borderColor: ['#0D9488', '#0D9488'],
                borderWidth: 2
            }]
        },
    })

  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">

        {/* First row, full width */}
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
            <div className="text-xl text-amber-600 pt-12">
                We've changed the life to
            </div>
            <div className="text-teal-600 text-9xl font-extrabold">
               3,462 <span className="text-8xl">trainees recorded</span>
            </div>
            <p className="text-xl text-gray-500 pt-12">
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
                <div className="text-teal-600 text-9xl font-extrabold uppercase">
                    Five
                </div>
            </div>
            {/* Second block */}
            <div className="col-span-2">
                <div className="text-xl text-amber-600">
                    Training added to the training schedule
                </div>
                <div className="text-teal-600 text-6xl font-extrabold">
                    23,775 items
                </div>
                <p className="text-xl text-gray-500">
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
                <div className="text-teal-600 text-8xl font-extrabold">
                    17,319 
                </div>
                <div className="text-teal-600 text-4xl font-bold">
                    completed on the app
                </div>
            </div>
            {/* Forth block */}
            <div className="col-span-2">
                <div className="grid lg:grid-cols-2">
                    <div className="text-amber-600 font-extrabold text-right" style={{fontSize: '10rem'}}>
                        84 
                    </div>
                    <div className="text-teal-600 text-6xl font-extrabold">
                        Users, team leaders & admin added
                    </div>
                </div>
            </div>
            {/* Fith block */}
            <div className="col-span-2">
                <div className="text-xl text-amber-600">
                    Training added to the training schedule
                </div>
                <div className="text-teal-600 text-6xl font-extrabold">
                    23,775 items
                </div>
                <p className="text-xl text-gray-500">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                    aliquam. Quisque id at vitae feugiat egestas ac.
                </p>
            </div>
            {/* Sith block */}
            <div className="col-span-1">
                <div className="text-teal-600 text-8xl font-extrabold">
                    4,380
                </div>
                <div className="text-amber-600 text-4xl font-bold">
                    Reports downloaded
                </div>
            </div>
        </div>
        <canvas id="myChart" className="w-48 h-48"></canvas>
    </div>
  )
}

export default StatContent