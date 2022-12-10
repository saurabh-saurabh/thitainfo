import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const ArticleList = () => {
  const alertClicked = () => {
    //alert("You clicked the third ListGroupItem");
  };
  return (
    <ListGroup flush>
      <ListGroupItem href="#" tag="a">
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem href="#" tag="a">
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem href="#" tag="a">
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem href="#" tag="a">
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem href="#" tag="a">
        Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
  );
};

export default ArticleList;
