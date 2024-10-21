import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Erro404 from './pages/Erro404';
import Layout from './pages/Layout';
function App() {
  return (
    <>
    <BrowserRouter></BrowserRouter>
    <Routes>
  
    <Route index element={<Login />} />
<Route path="/home" element={<Home />} />
  <Route path="/perfil/:id" element={<Perfil />} />
<Route path="*" element={<Erro404 />} />

<Route element={<Layout />}>
  <Route path="/home" element={<Home />} />
  <Route path="/perfil/:id" element={<Perfil />} />
</Route>

 </Routes>

    </>
  );
}

export default App;

