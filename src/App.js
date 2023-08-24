import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import {Routes, Route} from 'react-router-dom'
import Resume from './components/Resume/Resume'
import ContactMe from './components/ContactMe/ContactMe';
import Work from './components/Work/Work';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/React-Portfolio' element={<Home />} />
        <Route path='/React-Portfolio/resume' element={<Resume />} />
        <Route path='/React-Portfolio/contactme' element={<ContactMe />} />
        <Route path='/React-Portfolio/work' element={<Work />} />
        <Route path='/React-Portfolio/aboutme' element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
