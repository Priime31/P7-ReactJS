import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/Pages/Home';
import About from '@/Pages/About';
import Lodging from '@/Pages/Lodging';
import Error from '@/_utils/Error';
import Layout from '@/Pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>

            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Lodging" element={<Lodging/>}/>

            <Route path="*" element={<Error/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;