import React from "react";
import "./Article.scss";

const Article = ({title, description}) => {
  return (
    <div className="article">
      <div className="article-name">
        <h1>{title}</h1>
      </div>
      <div className="article-description">
      <div className="editor" dangerouslySetInnerHTML={{__html:description}}>
      </div>
      </div>
    </div>
  );
};

export default Article;