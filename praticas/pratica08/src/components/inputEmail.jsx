function InputEmail(props) {
    {props.error && <p>{props.error.message}</p>}

    const regras = { 
        required: 'E-mail é obrigatório',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Formato de e-mail inválido',
        }
      }
      
    return (
     <>
       <label htmlFor="email">E-mail</label>
       <input type="email" {...props.register("email", regras)} />

     </>
    );
  }
  export default InputEmail;