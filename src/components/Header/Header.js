import {Container,Row,Col,Card} from 'react-bootstrap';
import s from './Header.module.css';
import portret from '../images/portret.png'


function Header(){
    return (
        <>
        <header style={s.header}>
            <Container>
                <Row>
                    <Col>
                    <Card>
                        <Card.Img src ={portret}>

                        </Card.Img>
                    </Card>
                    </Col>
                </Row>

            </Container>
        </header>
        </>
    )
}

export default Header;