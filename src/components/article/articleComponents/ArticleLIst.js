import React from "react";
import { ListGroup } from "react-bootstrap";

const ArticleList = () => {
  const alertClicked = () => {
    //alert("You clicked the third ListGroupItem");
  };
  return (
    <ListGroup className="text-center font-monospace fw-bolder">
      <ListGroup.Item action onClick={alertClicked}>
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action href="#link1">
        Link 3
      </ListGroup.Item>
      <ListGroup.Item action href="#link3">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action href="#link4">
        Link 3
      </ListGroup.Item>
      <ListGroup.Item action href="#link5">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action href="#link6">
        Link 3
      </ListGroup.Item>
      <ListGroup.Item action href="#link7">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action href="#link8">
        Link 3
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ArticleList;
