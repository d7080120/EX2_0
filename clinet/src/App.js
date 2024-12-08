import logo from './logo.svg';
import './App.css';
import AllToDo from './Comp/AllToDo';
import NavBar from './Comp/NavBar';
import { Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Link to={'/NavBar'}>Login</Link> */}
      <NavBar></NavBar>
      <br></br>

      <br></br>
      <Routes>
      <Route path='/NavBar' element={<NavBar />} />
      <Route path='/AllToDo' element={<AllToDo />} />

      </Routes>
        {/* <AllToDo/> */}
    </div>
  );
}

export default App;
