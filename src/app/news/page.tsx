"use client";
import NewsCard from "@/components/shared/NewsCard";
import { fetchNews } from "@/lib/fetchNews";
import { NewsItem } from "@/types/news";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CategoryFiltering from "./CategoryFiltering";

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await fetchNews(category, search);
      setNews(data);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    getNews();
  }, [category, search]);

  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-4">
        <SearchBar onSearch={setSearch}></SearchBar>
        <CategoryFiltering onCategoryChange={setCategory}></CategoryFiltering>
      </div>
      <h1 className="font-bold text-2xl my-8 ml-2">News List</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>
      ) : news.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
          {news.map((item) => (
            <NewsCard key={item?._id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No news found.</p>
      )}
    </div>
  );
}
