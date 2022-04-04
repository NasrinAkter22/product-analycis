
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Reviews from './Component/Reviews/Reviews';
import Dashbord from './Component/Dashbord/Dashbord';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
   
<>
<Header></Header>

      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashbord" element={<Dashbord></Dashbord>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
 
    </>
  );
}

export default App;
