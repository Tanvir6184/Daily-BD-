import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading";

const ApprovedArticles = () => {
  const axiosSecure = useAxiosSecure();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const {
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["approvedArticles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles-approved", {
        params: {
          status: "approved",
        },
      });
      return res.data;
    },
  });

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Approved Articles</h2>

      {/* Search field */}
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 rounded-md w-full"
          placeholder="Search articles by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center text-gray-500">
          No articles found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article._id}
              className="card w-full bg-slate-400 shadow-xl rounded-lg overflow-hidden p-4"
            >
              <figure className="mb-4">
                <img
                  src={article.image_url || "https://via.placeholder.com/400"}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </figure>
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-200 mb-4">
                  {truncateText(article.description, 30)}
                </p>
                <p className="text-gray-300">Author: {article.name}</p>
                <p className="text-gray-300">Email: {article.email}</p>
                <p className="text-gray-300">Publisher: {article.publisher}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApprovedArticles;
