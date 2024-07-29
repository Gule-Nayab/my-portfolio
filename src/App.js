import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Home from './containers/home/index';
import Contact from './containers/contact/index';
import About from './containers/about/index';
import Resume from './containers/resume/index';
import Skills from './containers/skills/index';
import Portfolio from './containers/portfolio/index';
import Navbar from './components/nabvar';
function App() {
 

  return (
    <div className="App">
      {/* particle js */ }


      {/* Navbar */}
      <Navbar/>
      {/* Main page content */}
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/'  element={<Home/>}></Route>
        <Route index path='/about'  element={<About/>}></Route>
        <Route index path='/resume'  element={<Resume/>}></Route>
        <Route index path='/skills'  element={<Skills/>}></Route>
        <Route index path='/Portfolio'  element={<Portfolio/>}></Route>
        <Route index path='/contact'  element={<Contact/>}></Route>
      </Routes>
      </div>  
    </div>
  );
}

export default App;
