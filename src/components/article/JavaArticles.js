import React from "react";

// Articles
import ArticleList from "./articleComponents/ArticleLIst";
import Articles from "./articleComponents/Articles";
import InnerArticlesList from "./articleComponents/InnerArticlesList";

// React Boostrap
import { Container, Row, Col } from "react-bootstrap";

const JavaArticles = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <ArticleList />
        </Col>
        <Col sm={9}>
          <Articles />
        </Col>
      </Row>
    </Container>
  );
};

export default JavaArticles;
