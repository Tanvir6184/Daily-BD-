import { useEffect, useState } from "react";

const Headline = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/headline") // Fetch headlines from backend
      .then((res) => res.json())
      .then((data) => setHeadlines(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-900 text-white py-2">
      <div className="flex space-x-10 animate-marquee">
        {headlines.map((item, index) => (
          <p key={index} className="text-lg font-bold">
            📰 {item.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Headline;
