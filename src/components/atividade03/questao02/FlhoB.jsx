import { useState } from "react"

const FilhoB = (props) => {

    const [menorNumero,setMenorNumero] = useState(0)

    const menorElemento =(vec)=>{
        let menor = vec[0]
        for(let i=1;i<vec.length;i++){
            if(vec[i] < menor) menor = vec[i]
        }
        return menor;
    }

    return(
        <>
        <h1>Menor Elemento do vetor é: {menorNumero}</h1>
            <button onClick={()=>setMenorNumero(menorElemento(props.vetor))}>Calcular Menor Elemento</button>
        </>
    )
}

export default FilhoB