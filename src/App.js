import {BrowserRouter} from 'react-router-dom';
//import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
 


function App() {
  return (
    <>
    <BrowserRouter>

    <Navigation/>
    </BrowserRouter>
    </>
  );
}

export default App;
