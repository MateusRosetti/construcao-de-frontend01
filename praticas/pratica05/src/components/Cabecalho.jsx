import Icone from "./icone";
import Titulo from "./titulo";
import InputPesquisar from "./InputPesquisar";
import './Cabecalho.css';
function Cabecalho() {
    return (
        <header>
        <div>
          <Icone imagem="" texto="Logo do Aplicação" />
          <Titulo texto="Aluno Online" />
        </div>
        <div> 
          <InputPesquisar />
          <Icone imagem="" texto="Icone Pesquisar" />
        </div>
     </header>
     
    );
  }
  export default Cabecalho;