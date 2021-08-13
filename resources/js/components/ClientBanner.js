import Logo1 from '../../../public/assets/tuple-logo-amber-200.svg'
import Logo2 from '../../../public/assets/mirage-logo-amber-200.svg'
import Logo3 from '../../../public/assets/statickit-logo-amber-200.svg'
import Logo4 from '../../../public/assets/transistor-logo-amber-200.svg'
import Logo5 from '../../../public/assets/workcation-logo-amber-200.svg'

const logos = [
    { name: 'Tuple', url: Logo1 },
    { name: 'Mirage', url: Logo2 },
    { name: 'StaticKit', url: Logo3 },
    { name: 'Transistor', url: Logo4 },
    { name: 'Workcation', url: Logo5 },
] 

const ClientBanner = () => {
    return(
        <div className="bg-teal-600">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <div className="lg:space-y-10">
                    <h2 className="text-3xl font-extrabold text-white">The world's most innovative companies use Workflow</h2>
                    <div className="mt-8 flow-root lg:mt-0">
                        <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                            {logos.map((logo) => (
                                <div key={logo.name} className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                    <img className="h-12" src={logo.url} alt={logo.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientBanner