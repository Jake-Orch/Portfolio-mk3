import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./components";
import { About, Contact, Home, Projects } from "./containers";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/Portfolio-mk3/' element={<Home />} />
          <Route path='/Portfolio-mk3/about' element={<About />} />
          <Route path='/Portfolio-mk3/projects' element={<Projects />} />
          <Route path='/Portfolio-mk3/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
