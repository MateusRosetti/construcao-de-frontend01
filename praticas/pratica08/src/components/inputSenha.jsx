function InputSenha(props) {

    {props.error && <p>{props.error.message}</p>}
    const regras = { 
        required: 'Senha é obrigatória',
        minLength: {
          value: 6,
          message: 'A senha deve ter pelo menos 6 caracteres'
        }
      }
      
    return (
     <>
       <label htmlFor="senha">Senha</label>
       <input type="password" {...props.register("senha", regras)} />

       <Conteudo>
       <h1>Aluno Online</h1>
<FormLogin />


       </Conteudo>
<Rodape />


     </>
    );
  }
export default InputSenha;  