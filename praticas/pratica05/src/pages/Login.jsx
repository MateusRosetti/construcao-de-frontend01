import Conteudo from "../components/Conteudo";
import Rodape from "../components/Rodape";
import Icone from "../components/icone";
import Titulo from "../components/titulo";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";
import Link from "../components/link";
function Login() {
    return (
     <>
     <Conteudo>
     <Icone imagem="" texto="Logo da Aplicação"/>
<Titulo texto="Aluno Online" />
<InputEmail />
<InputSenha />
<Botao texto="Entrar"/>
<Link texto="Esqueceu a Senha?" />

     </Conteudo>
<Rodape texto="Copyright (C) 2024" />

     </>
    );
  }
  export default Login;