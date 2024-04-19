// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Components/Form/Form';
import  DisplayPage from './Components/DisplayPage/DisplayPge';
// import { CounterPage } from './CounterPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/display" element={<DisplayPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
