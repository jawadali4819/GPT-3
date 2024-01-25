import React from "react";
import "./Article.css";

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="blog" />
      </div>

      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <button>Read Full Article</button>
      </div>
    </div>
  );
};

export default Article;
