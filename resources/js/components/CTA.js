const CTA = () => {
    return (
      <div>
        <div className="bg-gradient-to-r from-lightTeal to-turquoise">
          <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Boost your productivity.</span>
              <span className="block text-cyan-900">Start using Workflow today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-teal-100">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
            </p>
            <a
              href="#"
              className="mt-8 w-full bg-cyan-50 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-cyan-700 hover:bg-cyan-100 sm:w-auto"
            >
              Sign up for free
            </a>
          </div>
        </div>
      </div>
    )
}

export default CTA
  