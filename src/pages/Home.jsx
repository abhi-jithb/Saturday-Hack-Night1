import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import NewsCard from "../components/NewsCard";
import SpaceBackground from "../components/SpaceBackground";
import HeroBackground from "../components/HeroBackground";
<<<<<<< HEAD

=======
>>>>>>> f1227162bbfb8577c4e394c596c07856153d140b
const apiKey = process.env.NASA_API_KEY;

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`);
        const data = await response.json();
        setNews(data.map((item) => ({
          title: item.title,
          description: item.explanation,
          url: item.url,
          image: item.url,
        })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <SpaceBackground />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeroBackground />
          <div className="relative px-6 py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
