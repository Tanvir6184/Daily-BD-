import React from "react";

const HomeLayer = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
      <div className="container mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Daily Bangladesh
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Stay updated with the latest news, insights, and trends from
          Bangladesh.
        </p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {/* Highlight 1 */}
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Top News</h3>
            <p className="text-lg">
              Get the latest headlines and in-depth articles.
            </p>
          </div>
          {/* Highlight 2 */}
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Breaking Stories</h3>
            <p className="text-lg">
              Stay informed with real-time updates and breaking stories.
            </p>
          </div>
          {/* Highlight 3 */}
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Community Insights</h3>
            <p className="text-lg">
              Discover perspectives and discussions from local communities.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="/explore"
          className="btn btn-primary text-lg font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore Latest News
        </a>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute inset-x-0 bottom-0">
        <svg
          className="w-full h-24 text-white opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,160C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,181.3L1440,203L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HomeLayer;
