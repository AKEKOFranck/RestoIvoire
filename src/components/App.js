import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import First from './First';
import Second from './Second';
import Third from './Third';
import Inscrip from './Inscrip';
import About from './page1/About';
import Footer from './Footer';

function App() {
  return(
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <First />
            <Second />
            <Third />
            <Inscrip />
          </>
        } />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;