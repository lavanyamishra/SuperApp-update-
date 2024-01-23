import React, { useState, useEffect } from "react";
import "./News.css";
const News = () => {
  const [neswData, setNewsData] = useState([]);

  const getData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=af3e4127425f4d08b118380a021857d3"
    );
    const result = await data.json();
    let artical = result.articles[3];
    setNewsData(artical);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="news_main">
      <div className="news_section">
        <div
          className="news_heading"
          style={{
            backgroundImage: `url(${neswData.urlToImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="news_des">
            <h1>{neswData.title}</h1>
            <p>{neswData.publishedAt}</p>
          </div>
        </div>
        <div className="news_details">
          <p>{neswData.content}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
