import React from "react";


const BlogPost = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
        </div>
        <p className="text-gray-600 mt-3">{post.body}</p>
        <button className="mt-4 text-indigo-500 hover:text-indigo-700">
          Read More →
        </button>
        <span className="text-sm text-gray-500 ml-5">{post.readTime} min read</span>
      </div>
    </div>
  );
};

export default BlogPost;