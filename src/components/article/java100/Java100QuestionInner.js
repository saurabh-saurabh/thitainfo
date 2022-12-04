import React from "react";
import { ListGroup } from "react-bootstrap";

const Java100QuestionInner = ({ code }) => {
  return (
    <ListGroup.Item key={code.id} action href={"#" + code.id}>
      {code.question}
    </ListGroup.Item>
  );
};

export default Java100QuestionInner;
