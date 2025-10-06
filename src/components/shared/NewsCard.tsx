import { NewsProps } from "@/types/news";
import Link from "next/link";
import React from "react";

const NewsCard = ({ item }: NewsProps) => {
  return (
    <div>
      <Link
        className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href={`/news/${item._id}`}
      >
        <img
          src={item.imageUrl}
          className="shadow rounded-lg overflow-hidden border h-60 w-80 hover:scale-105 transition-all cursor-pointer duration-200"
        />
        <div className="m-4">
          <h4 className="font-bold text-xl hover:text-red-400">
            {item.title.slice(0, 40) + "..."}
          </h4>
          <p className="mt-2 text-gray-600">
            {item.description.slice(0, 60) + "..."}
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Read More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
