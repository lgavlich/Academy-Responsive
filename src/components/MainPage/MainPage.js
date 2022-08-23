import React from "react";
import { Container,Col, Row,Card, Button } from "react-bootstrap";
import math from "../images/math.png";
import chemistry from "../images/chemistry.png";
import physycs from "../images/physycs.png";
import informatics from "../images/informatics.png";
import s from './MainPage.module.css'
import Courses from "../Courses/Courses";

export default function MainPage() {
  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Row>
        <Col>
          <Card
            className={s.icon}
            style={{
              width: "8rem",
              height: "10rem",
              background: "#CDDFF7",
              borderColor: " #CDDFF7",
              borderRadius: "1rem",
            }}
          >
            <img style={{ width: "2rem" }} src={math} />
            <Card.Body>
              <Card.Text>Math</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className={s.icon}
            style={{
              width: "8rem",
              height: "10rem",
              background: "#FFF2DE",
              borderColor: "#FFF2DE",
              borderRadius: "1rem",
            }}
          >
            <img style={{ width: "2rem" }} src={chemistry} />
            <Card.Body>
              <Card.Text>Chemistry</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className={s.icon}
            style={{
              width: "8rem",
              height: "10rem",
              background: "#ECFFD7",
              borderColor: "#ECFFD7",
              borderRadius: "1rem",
            }}
          >
            <img style={{ width: "1rem" }} src={physycs} />
            <Card.Body>
              <Card.Text>Physycs</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className={s.icon}
            style={{
              width: "8rem",
              height: "10rem",
              background: "#FFE2E5",
              borderColor: "#FFE2E5",
              borderRadius: "1rem",
            }}
          >
            <img style={{ width: "2rem" }} src={informatics} />
            <Card.Body>
              <Card.Text>Informatics</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button style={{ marginTop: "3rem", marginLeft: "40rem" }}>
        Explore All
      </Button>
      <Courses />
    </Container>
  );
}
