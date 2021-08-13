import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'

const stats = [
    { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
    { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: MailOpenIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorClickIcon, change: '3.2%', changeType: 'decrease' },
]

const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

const StatContent = () => {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                    <h2 className="text-2xl font-semibold tracking-wider text-amber-600 uppercase">Valuable Metrics</h2>
                    <p className="mt-3 text-3xl font-extrabold text-gray-900">
                        Get actionable data that will help grow your business
                    </p>
                    <p className="mt-5 text-lg text-gray-800">
                        Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
                        feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
                        nibh integer quis. Eu vulputate diam sit tellus quis at.
                    </p>
                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        {metrics.map((item) => (
                            <p key={item.id}>
                                <span className="block text-2xl font-bold text-gray-900">{item.stat}</span>
                                <span className="mt-1 block text-base text-gray-800">
                                    <span className="font-medium text-gray-900">{item.emphasis}</span> 
                                    {item.rest}
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                        <img
                            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                            src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                            alt="Inbox user interface"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-semibold tracking-wider text-amber-600 uppercase">Last 30 days</h2>

            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                    >
                        <dt>
                        <div className="absolute bg-indigo-500 rounded-md p-3">
                            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                        <p
                            className={classNames(
                            item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                            'ml-2 flex items-baseline text-sm font-semibold'
                            )}
                        >
                            {item.changeType === 'increase' ? (
                            <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                            ) : (
                            <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                            )}

                            <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                            {item.change}
                        </p>
                        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                            <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                {' '}
                                View all<span className="sr-only"> {item.name} stats</span>
                            </a>
                            </div>
                        </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    </div>
  )
}

export default StatContent