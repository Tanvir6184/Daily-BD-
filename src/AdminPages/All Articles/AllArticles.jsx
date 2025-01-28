import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AllArticles = () => {
  const axiosSecure = useAxiosSecure();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [declineReason, setDeclineReason] = useState("");
  const [currentArticleId, setCurrentArticleId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const {
    data: articles = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      return res.data;
    },
  });

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearchTerm = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesPublisher = selectedPublisher
      ? article.publisher === selectedPublisher
      : true;

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => article.tags.includes(tag));

    return matchesSearchTerm && matchesPublisher && matchesTags;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        <div className="flex gap-4 mb-4">
          <select
            value={selectedPublisher}
            onChange={(e) => setSelectedPublisher(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">All Publishers</option>
            {Array.from(
              new Set(articles.map((article) => article.publisher))
            ).map((publisher) => (
              <option key={publisher} value={publisher}>
                {publisher}
              </option>
            ))}
          </select>

          <div className="flex gap-2">
            {Array.from(
              new Set(articles.flatMap((article) => article.tags))
            ).map((tag) => (
              <label key={tag} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTags([...selectedTags, tag]);
                    } else {
                      setSelectedTags(selectedTags.filter((t) => t !== tag));
                    }
                  }}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedArticles.map((article) => (
          <div
            key={article._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <figure className="relative">
              <img
                src={article.image_url || "https://via.placeholder.com/400"}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              {article.isPremium && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  Premium
                </span>
              )}
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {truncateText(article.description, 30)}
              </p>
              <div className="flex flex-col text-sm text-gray-500">
                <p>
                  <span className="font-semibold">Author:</span> {article.name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {article.email}
                </p>
                <p>
                  <span className="font-semibold">Published:</span>{" "}
                  {new Date(article.posted_date).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold">Publisher:</span>{" "}
                  {article.publisher}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
