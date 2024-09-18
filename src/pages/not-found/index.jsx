import { useNavigate } from "react-router-dom"

export default function Not_Found() {

    const navigate = useNavigate()
    function goBack() {
        navigate("/")
    }

    return(
        <div>
            <h1>Ops... There is nothing here =(...</h1>
            <button onClick={goBack}>Return to Home</button>
        </div>
    )
}