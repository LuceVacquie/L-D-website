const FeaturesHeader = ({ h2, title, text }) => {
    return (
      <div className="pt-24 bg-teal-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-wider text-amber-600 uppercase">{h2}</h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              {title}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">
              {text}
            </p>
          </div>
        </div>
      </div>
    )
  }

  export default FeaturesHeader