import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogPost from "../components/blogPost";

const Info = () => {
  const samplePosts = {
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc ultricies aliquam. Nullam nec purus ut nunc ultricies aliquam.",
    readTime: 2,
    image: "/icons/burger_plate.jpeg",
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen">
      <Header showLimitedNav={true}/>
      <main className="px-6 lg:px-16 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
            Restaurant Blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPost post={samplePosts} />
            <BlogPost post={samplePosts} />
            <BlogPost post={samplePosts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Info;
