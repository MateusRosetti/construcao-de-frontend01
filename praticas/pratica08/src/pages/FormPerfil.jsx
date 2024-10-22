import {useForm} from "react-hook-form";
import InputEmail from "../components/inputEmail";
import InputNome from "../components/inputNome";
import InputSenha from "../components/inputSenha";
import Botao from "../components/Botao";

function FormPerfil() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {id} = useParams();
    const onSubmit = (data) => {
        console.log('Dados recebidos:', data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
<InputNome register={register} error={errors.nome} />
<InputEmail register={register} error={errors.email} />
<InputSenha register={register} error={errors.senha} />
<Botao texto="Salvar" />



      </form>
    );
  }
  export default FormPerfil;