import React from 'react'

import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
} from '@heroicons/react/outline'


const features = [
    { name: 'Push to Deploy', icon: CloudUploadIcon },
    { name: 'SSL Certificates', icon: LockClosedIcon },
    { name: 'Simple Queues', icon: RefreshIcon },
    { name: 'Advanced Security', icon: ShieldCheckIcon },
    { name: 'Powerful API', icon: CogIcon },
    { name: 'Database Backups', icon: ServerIcon },
]

const Features = () => {

    return(
        <>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        The perfect L&D tool
                    </h1>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Start building for free, then add a site plan to go live. Account plans unlock additional features.
                    </p>
                </div>
            </div>
            <div className="relative bg-white pb-16 sm:pb-24 lg:pb-32">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-2xl font-semibold tracking-wider text-amber-600 uppercase">Key Features</h2>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
 
                        <div className="mt-12 flex items-center justify-center">
                            <a href='/features' className="whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-800">
                                View all features
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features