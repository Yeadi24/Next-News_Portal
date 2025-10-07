export const fetchNews = async (category: string = "", search: string = "") => {
  try {
    const response = await fetch(
      `https://next-news-backend-snowy.vercel.app/news?category=${category}&search=${search}`,
      {
        cache: "force-cache",
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news data ", error);
    return [];
  }
};
