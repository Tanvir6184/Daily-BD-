import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Components/Loading";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(article);

  useEffect(() => {
    axios
      .get(`https://assignment-11-server-zeta-lilac.vercel.app/article/${id}`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching article:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          <Loading></Loading>
        </p>
      </div>
    );
  if (!article)
    return (
      <div className="text-center mt-20">
        <p className="text-2xl font-bold text-red-500">Article not found.</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        {article.title}
      </h1>
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full object-cover h-80"
        />
      </div>
      <div className="mt-6">
        <p className="text-gray-600 leading-relaxed text-lg">
          {article.description}
        </p>
      </div>
      <div className="mt-6 flex justify-between items-center text-gray-500 text-sm border-t pt-4">
        <p>
          Status: <span className="font-medium">{article.status}</span>
        </p>
        <p className="italic">By {article.publisher || "Unknown"}</p>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Back to Articles
        </button>
      </div>
    </div>
  );
};

export default ArticleDetails;
