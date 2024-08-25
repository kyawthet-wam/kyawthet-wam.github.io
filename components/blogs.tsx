"use client";
import React, { useState, useEffect } from "react";
import { BlogPost } from "@/types/definitions";
import { BlogCard } from "./blog_card";

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/rss");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blogs = await response.json();
        setBlogs(blogs);
        setError(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError(true);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return (
      <section>
        <div className="text-xs text-slate-500 text-center mt-20 mb-20 font-semibold">
          <ul>
            <p>Failed to fetch data, please try again later.</p>
          </ul>
          <a
            href={"https://medium.com/@kyawthetwam"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className="font-bold text-sm text-[#083f99] "
          >
            Read on Medium
          </a>
        </div>
      </section>
    );
  }

  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogCard key={blog.link} blog={blog} />
      ))}
    </div>
  );
}
