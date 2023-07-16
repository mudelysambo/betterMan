import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import BusinessIntelli from './Pages/BusinessIntelligence';
import Science from './Pages/Science';
import Stem from './Pages/Stem'; 
import Math from './Pages/Math';
import It from './Pages/InformationTechnology';
import WebD from './Pages/WebDevelopment';
import About from "./Pages/MAbout";

import NavBar from "./Components/NavBar";
import Engineering from "./Pages/Engineering";
 
function App() {
<div>
<Router>
 <NavBar />
  <Routes>
    <Route path="/" element={<Stem />} />
    <Route path="/science" element={<Science />} />
    <Route path="/engineering" element={<Engineering />} />
    <Route path="/math" element={<Math />} />
    <Route path="/businessintelli" element={<BusinessIntelli />} />
      <Route path="/it" element={<It />} />
      <Route path="/web" element={<WebD />} />
      <Route path="/about" element={<About />} />
  </Routes>
  <Footer />
</Router>,
</div>
}
export default App;