import React, { useState, useEffect } from "react";
import Publisher from "../../Components/Publisher Data/Publisher";
import HomeLayer from "../../Components/HomeLayer";
import HomeLayerTwo from "../../Components/HomeLayerTwo";
import { Link } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HomeLayer />
      <Publisher />
      <HomeLayerTwo />

      {/* Subscription Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Subscribe Now!</h2>
            <p className="mb-4">
              Get the latest updates and exclusive content.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="subscription">
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
                  Subscribe
                </button>
              </Link>
              <button
                className="px-6 py-2 bg-gray-300 rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
