import {Container,Card} from 'react-bootstrap';
import s from './Header.module.css';
import portret from '../images/portret.png'


function Header(){
    return (
        <>
        <header style={s.header}>
            <Container>
              
                    <Card>
                        <Card.Img src ={portret}>

                        </Card.Img>
                    </Card>
                    
              

            </Container>
        </header>
        </>
    )
}

export default Header;