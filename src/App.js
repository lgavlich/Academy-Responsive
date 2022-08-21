import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import 'antd/dist/css/antd.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
