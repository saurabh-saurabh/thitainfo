import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";

const ArticleList = () => {
  return (
    <Card style={{ width: "18rem", marginBottom: "20px", marginTop: "10px" }}>
      <Card.Header>Featured</Card.Header>
      <ButtonGroup vertical className="bg-dark text-white">
        <Button variant="light">Button</Button>
        <Button variant="light ">Button</Button>
      </ButtonGroup>
    </Card>
  );
};

export default ArticleList;
