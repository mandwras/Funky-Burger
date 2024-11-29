"use client";
import React, { useEffect , useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogPost from "../components/blogPost";
import supabase from "../lib/supabaseClient";


const Info = () => {
  const [posts, setPosts] = useState([]);

  // Fetch blog posts from Supabase
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blogpost")
        .select("*")
        .order("created_at", { ascending: false }); // Optional ordering
      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen">
      <Header showLimitedNav={true} />
      <main className="px-6 lg:px-16 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
            Restaurant Blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
