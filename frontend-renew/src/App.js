import './App.css';
import { Routes, Route } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import Registration from './components/Registration';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Registration/>}/>
          <Route path="/work" element={<FileUpload/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
