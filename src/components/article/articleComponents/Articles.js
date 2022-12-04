import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Java100QuestionInner from "../java100/Java100QuestionInner";
import Java100Question from "../java100/Java100Question";

const Articles = () => {
  const codeString = [
    {
      id: 1,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 2,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 3,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 4,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 5,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 6,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 7,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 8,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 9,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 10,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 11,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
    {
      id: 12,
      language: "Saurabh Prajapati",
      question: "How to do in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
  ];

  const [code] = useState(codeString);
  return (
    <Container>
      <Row>
        <Col sm={9}>
          {code.map((obj) => (
            <Java100Question code={obj} />
          ))}
        </Col>
        <Col sm={3}>
          <ListGroup className="text-center font-monospace fw-bolder">
            {code.map((obj) => (
              <Java100QuestionInner code={obj} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Articles;
