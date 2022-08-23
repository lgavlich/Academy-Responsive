import { Container,Button } from "react-bootstrap";
import s from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import portret from '../images/portret.png';
import MainPage from '../MainPage/MainPage';


 



export default function Header(){
    return (
      <>
        <header className={s.header}>
          <Container>
            <Navigation />
            <div className={s.container}>
              <div className={s.info}>
                <p className={s.modern}>Modern</p>
                <p className={s.title}>Education Academy</p>
                <p className={s.text}>
                  Education is the process of facilitating learning, or the
                  acquisition of knowledge, skills, values, morals.
                </p>
                <Button className={s.btn}>COURSES</Button>
              </div>
              <div className={s.image}>
                <img style={{ width: "20rem" }} src={portret} />
              </div>
            </div>
            <div className={s.container_info}>
              <p className={s.explore}>Explore Now</p>
              <p className={s.categories}>Categories</p>
              <p className={s.text_2}>
                Educational methods include teaching, training, storytelling,
                discussion and directed research.
              </p>
            </div>
            <MainPage/>
          </Container>
        </header>
      </>
    );
}

