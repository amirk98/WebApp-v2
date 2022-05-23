import './App.css';
import { Routes, Route } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Registration/>}/>
          <Route path="/upload" element={<FileUpload/>}/>
        </Routes>
    </div>
  );
}

export default App;
