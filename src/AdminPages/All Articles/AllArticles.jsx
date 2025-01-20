import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

// Function to fetch articles from the backend
// const fetchArticles = async () => {
//   const response = await axios.get("/articles");
//   return response.data; // Assuming the response is an array of articles
// };

const AllArticles = () => {
  const axiosSecure = useAxiosSecure();
  // Use useQuery hook from the latest TanStack Query version
  const {
    data: articles = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles"], // Query key
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      return res.data;
    }, // Query function
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles?.map((article) => (
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
          <div className="card-body">
            <h2 className="text-xl font-semibold text-white mb-2">
              {article.title}
            </h2>
            <p className="text-gray-200 mb-4">{article.description}</p>
            <div className="flex justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllArticles;
