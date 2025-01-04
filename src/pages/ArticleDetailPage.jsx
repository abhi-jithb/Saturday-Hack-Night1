import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ArticleDetailPage = () => {
  const { state } = useLocation();
  const { articleId } = useParams();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark text-white">
        <h1 className="text-2xl font-bold">Article not found</h1>
      </div>
    );
  }

  const { title, description, image } = state;

  return (
    <div className="min-h-screen bg-dark text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <img src={image} alt={title} className="w-full rounded-lg mb-6" />
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
