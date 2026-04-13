//PARADIGMA FUNCIONAL
//PARADIGMA PROCEDURAL
import { useState } from "react";
export function NovaTarefa(){

    const [texto, setTexto] = useState<string>("");

    const handleAdicionar = () => {
        if(texto.trim() !== ""){
            onAdicionar
        }
    }
    return(
    <div>
        <input
            type="text"
            placeholder = "Digite a nova tarefa"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={handleAdicionar}>Adicionar</button>
    </div>
    )
}