import React from 'react';
import { Navbar, Container, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import s from './Navigation.module.css';
import {Button} from 'antd'

export default  function Navigation() {
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
          <Button className={s.button}>CONTACT</Button>
        </Container>
      </Navbar>
    </>
  );
}

