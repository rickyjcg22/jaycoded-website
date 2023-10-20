import './App.css';
import { Routes,Route } from 'react-router-dom';
import RootLayout from './layouts/rootlayout';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (

    <Routes>

      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Route>

    </Routes>

  );
}

export default App;
