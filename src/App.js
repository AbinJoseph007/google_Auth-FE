import { Route, Routes } from 'react-router-dom';
import './App.css';
import Log from './Componets/Log';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Log/>}/>
        <Route path='register' element={<Log register/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
