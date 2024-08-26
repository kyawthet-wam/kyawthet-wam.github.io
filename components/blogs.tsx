"use client";
import React, { useState, useEffect } from "react";
import { BlogPost } from "@/types/definitions";
import { BlogCard } from "./blog_card";

const LOCAL_STORAGE_KEY = "cachedBlogs";
const CACHE_EXPIRATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const cachedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      const cachedTime = localStorage.getItem(`${LOCAL_STORAGE_KEY}_time`);

      const currentTime = new Date().getTime();
      const isCacheValid = cachedData && cachedTime && (currentTime - parseInt(cachedTime)) < CACHE_EXPIRATION_MS;

      if (isCacheValid) {
        // Use cached data
        setBlogs(JSON.parse(cachedData));
        setError(false);
        setIsLoading(false);
        return;
      }

      // Fetch new data
      try {
        const rssUrl = "https://cors-anywhere.herokuapp.com/https://medium.com/feed/@kyawthetwam";
        const response = await fetch(rssUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const xml = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, "text/xml");
        const items = Array.from(xmlDoc.querySelectorAll("item")).map((item) => ({
          title: item.querySelector("title")?.textContent || "",
          link: item.querySelector("link")?.textContent || "",
          description: item.querySelector("description")?.textContent || "",
          pubDate: item.querySelector("pubDate")?.textContent || "",
        }));

        // Cache the fetched data and current time
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
        localStorage.setItem(`${LOCAL_STORAGE_KEY}_time`, currentTime.toString());

        setBlogs(items);
        setError(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError(true);
      } finally {
        setIsLoading(false);
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

  if (isLoading) {
    return (
      <section>
        <div className="text-xs text-slate-500 text-center mt-20 mb-20 font-semibold">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <div>
      <div className="mx-10 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.link} blog={blog} />
        ))}
      </div>
    </div>
  );
}
