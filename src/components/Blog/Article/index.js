import React from "react";
import SurfSkate from "../../Sections/SurfSkate/SurfSkate";
import "./style.scss";

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
      <SurfSkate />
    </div>
  );
};

export default Article;