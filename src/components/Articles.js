import React from "react";
import { Row } from "reactstrap";
import ARCHERY from "../data/archery";

const ArticleLink = ({ source }) => {
  return ARCHERY.articles[source].map(article => (
    <div
      className="col-12 col-sm-6 col-lg-4"
      key={article.title}
      style={{ minHeight: "250px" }}
    >
      <a href={article.link} rel="noopener noreferrer" target="_blank">
        <img
          src={article.img}
          alt={article.title}
          className="border border-dark rounded article-img"
        />
        <p className="text-dark font-weight-bold article-title">
          {article.title}
        </p>
      </a>
    </div>
  ));
};

const Articles = () => {
  return (
    <div className="m-4">
      <Row>
        <div className="col-12">
          <h2 className="text-primary">ARTICLES</h2>
          <p className="lead">
            Here you can find articles about Archery to help you understand more
            about it.
          </p>
        </div>
      </Row>
      <Row className="text-center mt-4">
        <ArticleLink source="World Archery" />
        <ArticleLink source="Archery 360" />
      </Row>
    </div>
  );
};

export default Articles;
