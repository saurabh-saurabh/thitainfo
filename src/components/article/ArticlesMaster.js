import React from "react";

// Articles
import ArticleList from "./articleComponents/ArticleLIst";
import Articles from "./articleComponents/Articles";

// React Boostrap
import { Container, Row, Col } from "react-bootstrap";

const ArticlesMaster = () => {
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

export default ArticlesMaster;
