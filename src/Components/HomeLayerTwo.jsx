const HomeLayerTwo = () => {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center dark:bg-gray-900 dark:text-white bg-white">
        {/* Newspaper Logo */}
        <img
          src=""
          alt="Daily Bangladesh Logo"
          className="mx-auto h-24 w-24 rounded-full"
        />

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Stay Informed with Daily Bangladesh
        </h1>

        {/* Description */}
        <p className="mt-6 text-xl text-gray-600">
          Your trusted source for the latest news, in-depth analysis, and
          breaking updates from Bangladesh and around the world.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Read Today's Edition
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Breaking News</h2>
            <p className="mt-4 text-gray-600">
              Major developments in the political landscape of Bangladesh.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-700"
            >
              Read More →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">
              Business Update
            </h2>
            <p className="mt-4 text-gray-600">
              Latest trends and insights in the Bangladeshi economy.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-700"
            >
              Read More →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg ">
            <h2 className="text-2xl font-bold text-gray-900">
              Sports Highlights
            </h2>
            <p className="mt-4 text-gray-600">
              Catch up on the latest sports news and match results.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-700"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayerTwo;
