import React, {useState} from 'react';
import { Navbar, Container, NavLink ,Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import s from './Navigation.module.css';
import { Button } from 'antd'
import "antd/dist/antd.css";


export default function Navigation() {
   const [setIsModalVisible] = useState(false);

   const showModal = () => {
     setIsModalVisible(true);
   };

  
  
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand className={s.brand}>ACA</Navbar.Brand>
          <NavLink to="/coursec" className="link">
            Courses
          </NavLink>
          <NavLink to="/about" className="link">
            About
          </NavLink>
          <NavLink to="/services" className="link">
            Services
          </NavLink>
          <NavLink to="/events" className="link">
            Events
          </NavLink>
          <NavLink to="/blog" className="link">
            Blog
          </NavLink>
          <Nav>
            <Button
              type="primary"
              style={{ marginRight: 10 }}
              onClick={showModal}
            >
              Sign in
            </Button>
            <Button type="primary" onClick={showModal}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

