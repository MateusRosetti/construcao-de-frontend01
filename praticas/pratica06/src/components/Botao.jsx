function Botao(props) {
    return (
     <button><button onClick={(e) => props.navegaPara("/home")}>{props.texto}</button>
</button>
    );
  }
  export default Botao;
  