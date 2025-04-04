import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/headline")
      .then((res) => res.json())
      .then((data) => setHeadlines(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-32 text-center p-4 bg-gray-100">
      <p className="text-red-600 text-sm font-semibold">
        We stand for people's rights
      </p>
      <p className="text-5xl text-red-600 font-bold">
        Daily <span className="text-green-600">Bangladesh</span>
      </p>

      {/* Marquee Section */}
      <Marquee
        pauseOnHover
        speed={50}
        className="bg-gray-900 text-white py-2 m-4 mt-4"
      >
        {headlines.length > 0 ? (
          headlines.map((item, index) => (
            <p key={index} className="mx-5 text-lg font-bold">
              📰 {item.title}
            </p>
          ))
        ) : (
          <p className="text-lg">Loading latest news...</p>
        )}
      </Marquee>
    </div>
  );
};

export default Header;
