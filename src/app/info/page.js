"use client";
import React, { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogPost from "../components/blogPost";

const Info = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching blog posts from Supabase
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blogpost")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching blog posts:", error);
          setPosts([]); // Fallback in case of error
        } else {
          setPosts(data);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Skeleton Placeholder
  const skeletonPosts = Array(6).fill(0);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen">
      <Header showLimitedNav={true} />
      <main className="px-6 lg:px-16 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
            Blog Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? skeletonPosts.map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-gray-200 p-6 rounded-lg shadow-lg animate-pulse"
                  >
                    {/* Skeleton for Image */}
                    <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
                    {/* Skeleton for Title */}
                    <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
                    {/* Skeleton for Text */}
                    <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                ))
              : posts.map((post) => (
                  <BlogPost
                    key={post.id}
                    post={{
                      title: post.title,
                      body: post.text1,
                      readTime: post.readtime,
                      image: post.img_url,
                    }}
                  />
                ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Info;
