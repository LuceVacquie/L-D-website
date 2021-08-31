import React from 'react'

const PerfectFor = () => {
    return (
      <div className="h-screen relative bg-white lg:pb-24">
        <div className="h-full lg:mx-auto grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:items-start">
          <div className="h-full relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="sm:block absolute inset-y-0 right-0 w-screen bg-darkTeal"/>
            
            <div className="h-full mx-8 lg:max-w-7xl md:mr-24 grid grid-cols-2 gap-2 items-center">
                {/* First row */}
                <>
                    {/* First card */}
                    <div className="relative rounded-2xl shadow-xl overflow-hidden h-40 w-40 md:w-48 md:h-72 lg:h-80  xl:h-96 xl:w-64 self-end justify-self-end">
                        <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                        alt=""
                        />
                        <div className="absolute inset-0 bg-lightTeal mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-lightTeal via-lightTeal opacity-90" />
                        <div className="relative px-8 text-white ">
                            Supply chain
                        </div>
                    </div>
                    {/* Second card */}
                    <div className="relative rounded-2xl shadow-xl overflow-hidden h-40 w-40 md:h-48 xl:h-64 self-end ">
                        <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                        alt=""
                        />
                        <div className="absolute inset-0 bg-lightTeal mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-lightTeal via-lightTeal opacity-90" />
                        <div className="relative px-8 text-white ">
                            Workers
                        </div>
                    </div>
              </>
              {/* Second row */}
              <>
                    {/* First card */}
                    <div className="relative rounded-2xl shadow-xl overflow-hidden h-40 w-40 md:h-64 md:h-80  xl:h-96 xl:w-56 self-baseline justify-self-end">
                        <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                        alt=""
                        />
                        <div className="absolute inset-0 bg-lightTeal mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-lightTeal via-lightTeal opacity-90" />
                        <div className="relative px-8 text-white ">
                            Transport
                        </div>
                    </div>
                    {/* Second card */}
                    <div className="relative rounded-2xl shadow-xl overflow-hidden h-40 w-40 md:h-48 md:w-64 xl:h-64 xl:w-80 self-baseline">
                        <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                        alt=""
                        />
                        <div className="absolute inset-0 bg-lightTeal mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-lightTeal via-lightTeal opacity-90" />
                        <div className="relative px-8 text-white ">
                            Manufacturers
                        </div>
                    </div>
              </>
            </div>
          </div>
  
          <div className="h-full flex items-center relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="mx-12 md:pt-40 md:pt-12 lg:pt-0">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                A perfect fit
              </h2>
              <div className="mt-6 text-grey space-y-6">
                <p className="text-lg">
                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                  pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
                  porttitor vitae ut. Amet vitae fames senectus vitae.
                </p>
              </div>
            </div> 

          </div>
        </div>
      </div>
    )
  }
export default PerfectFor
  