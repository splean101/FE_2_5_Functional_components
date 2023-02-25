import React from "react";

function ArticleAuthor({text}) {
  console.log(text);
  return (
      <div className="article__author">
        <p className="article__author--name">{text.author}</p>
        <p className="article__author--date">{text.published}</p>
        <p className="article__author--theme">{text.theme}</p>
      </div>
    );
  }
export default ArticleAuthor;