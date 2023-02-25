import React from 'react';
import ArticleAuthor from './ArticleAuthor';
import ArticleBody from './ArticleBody';

function Article(props) {
  let { read } = props;
  return (
    <>
      {props.children}
      <ArticleBody show={props.show} text={props.text} read={read} />
      <ArticleAuthor text={props.text}/>
    </>
  );
}
export default Article;
