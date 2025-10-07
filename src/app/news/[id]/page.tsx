import { NewsItem } from "@/types/news";
import Image from "next/image";

export const revalidate = 60;
export const dynamicParams = true;

type Params = {
  id: string;
};

interface PageProps {
  params: Promise<Params>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const NewsDetailspage = async ({ params }: PageProps) => {
  const { id } = await params;

  const post: NewsItem = await fetch(
    `https://next-news-backend-snowy.vercel.app/news/${id}`
  ).then((res) => res.json());

  if (!post) return <div>News Not Found!</div>;

  return (
    <section className="py-12">
      <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-md object-cover"
          />
        )}

        <div className="my-5">
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <div className="flex justify-between items-center text-sm mb-4">
            <p>{new Date(post.published_at).toLocaleDateString()}</p>
            <p>
              Source: <span>{post.source}</span>
            </p>
          </div>
        </div>

        <div className="mb-4">
          {post.categories?.map((cat) => (
            <span
              key={cat}
              className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {cat}
            </span>
          ))}
        </div>

        <p className="mb-2">{post.snippet}</p>
        <p className="mb-4">{post.description}</p>
      </article>
    </section>
  );
};

export async function generateStaticParams() {
  const news: NewsItem[] = await fetch(
    `https://next-news-backend-snowy.vercel.app/news`
  ).then((res) => res.json());

  return news.map((item) => ({
    id: item._id.toString(),
  }));
}

export default NewsDetailspage;
