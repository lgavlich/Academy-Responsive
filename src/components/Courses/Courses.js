import React from "react";
import { Container } from "react-bootstrap";
import Bitmap from '../images/Bitmap.png';
import students from '../images/students.png'
import lesson from '../images/lesson.png';
import Alisia from '../images/Alisia.png';
import Ohta from '../images/Ohta.png'

import s from './Courses.module.css'

export default function Courses() {
    return (
      <>
        <Container style={{ background: " #FFFFFF", position: "absolute" }}>
          <div className="container">
            <p className={s.courses}>COURSES</p>
            <p className={s.txt}>Explore Our Courses</p>
          </div>
          <div style={{ display: "flex" }}>
            <img style={{ width: "35rem", height: "26rem" }} src={Bitmap} />
            <li className={s.card}>
              <img style={{ width: "16rem", height: "11rem" }} src={students} />
              <p>Sed do eiusmod tempor</p>
              <img src={Ohta} />
              <p>Ohta Kin</p>
            </li>
            <li className={s.card}>
              <img style={{ width: "16rem", height: "11rem" }} src={lesson} />
              <p>Labore et dolore magna</p>
              <img src={Alisia} />
              <p>Alicia Puma</p>
            </li>
          </div>
        </Container>
      </>
    );
}