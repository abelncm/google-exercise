import { useState } from "react";

function Mensagem(){

    const [mensagem, setMensagem] = useState("")

    return (
        <div>
            <input type="text" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
            <span>{mensagem}</span>
        </div>
    )
}

export default Mensagem