import { BrowserRouter, Route, Routes } from 'react-router-dom';
import lodgingList from "./assets/lodging.json";
import './App.scss'
import Home from '@/Pages/Home';
import About from '@/Pages/About';
import Lodging from '@/Pages/Lodging';
import Error from '@/_utils/Error';
import Layout from '@/Pages/Layout';
import { useEffect, useState } from 'react';

function App() {
  const [apparts, setApparts] = useState([]);
  useEffect(() => {
    setApparts(lodgingList);
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>

            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/lodging/:lodgingId" element={<Lodging apparts={apparts}/>}/>

            <Route path="*" element={<Error/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;