import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import axios from "axios";
import Feed from "./assets/Feed";

function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-5">RSS-Feed</h1>
      <h2 className="text-2xl font-semibold text-center mt-2 mb-4">
        Good morning, Satyam
      </h2>
      <h2 className="text-2xl font-semibold text-center mt-2 mb-4">
        Here are the articles to go with your morning coffee ☕
      </h2>
      <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
        <div className="bg-black flex flex-col items-center rounded-lg py-3 px-6 mb-5">
          <img
            src="https://cdn-images-1.medium.com/max/606/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png"
            alt="Netflix Technology Blog RSS Feed"
          />
        </div>
        {articles.map((item) => (
          <Feed
            key={item.item.link}
            title={item.item.title}
            link={item.item.link}
            date={item.item.pubDate}
          />
        ))}
      </div>
    </>
  );
}

export default App;
