import React from "react";
import { Container } from "react-bootstrap";
import { Button } from 'antd'
import Bitmap from '../images/Bitmap.png';
import students from '../images/students.png'
import lesson from '../images/lesson.png';
import inform from '../images/inform.png'
import math2 from '../images/math2.png'
import math3 from '../images/math3.png'
import chem from '../images/chem.png'
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
            <li style={{ marginLeft: "1.8rem" }} className={s.card}>
              <img style={{ width: "16rem", height: "11rem" }} src={students} />
              <p>Sed do eiusmod tempor</p>
              <img src={Ohta} />
              <p>Ohta Kin</p>
              <Button
                style={{
                  border: "1px solid rgba(74, 144, 226, 0.3);",
                  borderRadius: "6px",
                }}
              >
                START NOW
              </Button>
            </li>
            <li style={{ marginLeft: "1.8rem" }} className={s.card}>
              <img style={{ width: "16rem", height: "11rem" }} src={lesson} />
              <p>Labore et dolore magna</p>
              <img src={Alisia} />
              <p>Alicia Puma</p>
              <Button
                style={{
                  border: "1px solid rgba(74, 144, 226, 0.3);",
                  borderRadius: "6px",
                }}
              >
                START NOW
              </Button>
            </li>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", paddingTop: "2rem" }}
          >
            <li className={s.card}>
              <img style={{ width: "16rem", height: "11rem" }} src={inform} />
              <p>Commodo consequat</p>
              <img src={Alisia} />
              <p>Alicia Puma</p>
              <Button
                style={{
                  border: "1px solid rgba(74, 144, 226, 0.3);",
                  borderRadius: "6px",
                }}
              >
                START NOW
              </Button>
            </li>
            <li style={{ marginLeft: "1.8rem" }} className={s.card}>
              <img style={{ width: "16rem", height: "11rem" }} src={math2} />
              <p>Ullamco laboris nisi ut aliquip</p>
              <img src={Alisia} />
              <p>Alicia Puma</p>
              <Button
                style={{
                  border: "1px solid rgba(74, 144, 226, 0.3);",
                  borderRadius: "6px",
                }}
              >
                START NOW
              </Button>
            </li>
            <li style={{ marginLeft: "1.8rem" }} className={s.card}>
              <img style={{ width: "16rem", height: "11rem" }} src={chem} />
              <p>Quis nostrud exercitation</p>
              <img src={Alisia} />
              <p>Alicia Puma</p>
              <Button
                style={{
                  border: "1px solid rgba(74, 144, 226, 0.3);",
                  borderRadius: "6px",
                }}
              >
                START NOW
              </Button>
            </li>
            <li style={{ marginLeft: "1.8rem" }} className={s.card}>
              <img style={{ width: "16rem", height: "11rem" }} src={math3} />
              <p>Enim ad minim veniam</p>
              <img src={Alisia} />
              <p>Alicia Puma</p>
              <Button
                style={{
                  border: "1px solid rgba(74, 144, 226, 0.3);",
                  borderRadius: "6px",
                }}
              >
                START NOW
              </Button>
            </li>
          </div>
        </Container>
      </>
    );
}