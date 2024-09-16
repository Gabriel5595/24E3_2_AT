import { useNavigate } from "react-router-dom"

export default function Not_Found() {

    const navigate = useNavigate()
    function goBack() {
        navigate("/")
    }

    return(
        <div>
            <h1>Ops... Não encontramos esta página =(...</h1>
            <button onClick={goBack}>Voltar para a tela inicial</button>
        </div>
    )
}