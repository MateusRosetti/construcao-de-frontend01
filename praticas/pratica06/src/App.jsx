import {useState} from "react";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
function App() {
  
   
  const [rota, setRota] = useState("/login");
  const mudaRota = (url) => {
    setRota(url);

  }
  
  return (
    
 <>
 
    {rota == '/login' && <Login />}
{rota == '/home' && <Home />}
{rota == '/perfil' && <Perfil />}
<Login navegaPara={mudaRota} />
<Home navegaPara={mudaRota} />
<Perfil navegaPara={mudaRota} />

    </>
  );

  }
  export default App;