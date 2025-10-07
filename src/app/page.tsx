import Banner from "@/components/shared/Banner";
import Community from "@/components/shared/Community";
import Footer from "@/components/shared/Footer";
import NewsCard from "@/components/shared/NewsCard";
import { NewsItem } from "@/types/news";
import Image from "next/image";

const Home = async () => {
  const data = await fetch("https://next-news-backend-snowy.vercel.app/news");
  const news = await data.json();
  return (
    <div>
      <Banner></Banner>
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {news.slice(0, 3).map((item: NewsItem) => (
            <NewsCard key={item?._id} item={item} />
          ))}
        </div>
      </div>
      <Community></Community>
    </div>
  );
};
export default Home;
