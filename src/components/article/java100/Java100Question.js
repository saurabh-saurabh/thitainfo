import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Card } from "react-bootstrap";

const Java100Question = ({ code }) => {
  return (
    <Card id={code.id} style={{ margin: "10px" }} key={code.id}>
      <Card.Header>{code.question}</Card.Header>
      <Card.Body>
        <Card.Text>
          <SyntaxHighlighter language={code.language} style={a11yLight}>
            {code.codeString}
          </SyntaxHighlighter>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{code.output}</Card.Footer>
    </Card>
  );
};

export default Java100Question;
