import React from "react";
import { ListGroup } from "react-bootstrap";

const ArticleList = () => {
  const alertClicked = () => {
    //alert("You clicked the third ListGroupItem");
  };
  return (
    <ListGroup className="text-center font-monospace fw-bolder">
      <ListGroup.Item action onClick={alertClicked}>
        Java 100 Interview Question !!!
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ArticleList;
