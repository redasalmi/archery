import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import axios from "axios";

const ArticleLink = ({ articles }) => {
  if (articles === "error") {
    return (
      <div>
        <h4 className="text-primary">
          Sorry, Somethin is wrong with the API, try to refresh the page later.
        </h4>
      </div>
    );
  } else {
    return articles.map(article => (
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
  }
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      try {
        const result = await axios(
          "https://archery-api.now.sh/api/archery/articles"
        );
        setArticles(result.data);
      } catch (error) {
        setArticles("error");
      }
    }
    fetchArticles();
  }, []);

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
        <ArticleLink articles={articles} />
      </Row>
    </div>
  );
};

export default Articles;
