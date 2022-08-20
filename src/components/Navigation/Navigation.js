import React from 'react';
import {Navbar,Nav,Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navigation(){
    return(
        <>
        <Navbar>
            <Container>
                <Navbar.Brand>ACA</Navbar.Brand>
                <Nav className='mr-auto'>
                   <Nav.Link><Link to='/'>Coursers</Link></Nav.Link>
                   <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                   <Nav.Link><Link to='/services'>Services</Link></Nav.Link>
                   <Nav.Link><Link to='/events'>Events</Link></Nav.Link>
                   <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button style ={{marginRight: 10}}>CONTACT</Button>
                    </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Navigation;