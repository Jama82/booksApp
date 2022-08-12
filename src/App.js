
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addbooks from './components/Addbooks';
import Books from './components/Books';
import EditBook from './components/EditBook';
import Library from './components/Library';
import Navbar from './components/Navbar';

function App() {
  return <div className='App'>
    <BrowserRouter>
    <Navbar/>

    <Routes>    
    <Route path="/" element={<Library />} />      
      <Route path="/all" element={<Books />} />
      <Route path="/add" element={<Addbooks />} />
      <Route path="/edit/:id" element={<EditBook />} />



      
 
    </Routes>
    </BrowserRouter>
  
  </div>
}

export default App;
