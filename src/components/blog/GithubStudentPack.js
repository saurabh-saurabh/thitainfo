import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaUser, FaLocationArrow, FaClock } from "react-icons/fa";

const GithubStudentPack = () => {
  return (
    <Card id="GitStuPack" className="pb-30">
      <Card.Img
        variant="top"
        src="assets/img/blog/blog-1.jpg"
        className="img-fluid"
        alt="..."
      ></Card.Img>
      <Card.Body>
        <Card.Header className="font-monospace text-center">
          Science City Ahmedabad
        </Card.Header>
        <Card.Subtitle className="pt-3 text-muted">
          <Row>
            <Col lg={3}>
              <FaUser /> Saurabh Prajapti
            </Col>
            <Col lg={2}>
              <FaClock /> Jan 1 2021
            </Col>
            <Col lg={2}>
              <FaLocationArrow /> Ahmedabad
            </Col>
          </Row>
        </Card.Subtitle>
        <Card.Text className="pt-3">
          Gujarat Science City is a science education and entertainment centre
          located in Ahmedabad, Gujarat, India. Opened in 2002, it has an IMAX
          3D theatre; exhibitions on science, space, energy, life sciences,
          plants, nature and robotics; an aquarium, an aviary and a butterfly
          park; as well as other facilities.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default GithubStudentPack;
