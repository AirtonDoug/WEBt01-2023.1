import { useState } from "react"

const FilhoA = (props) => {


    const [maiorNumero,setMaiorNumero]= useState(0)

    const maiorElemento =(vec)=>{
        let maior = vec[0]
        for(let i=1;i<vec.length;i++){
            if(vec[i] > maior) maior = vec[i]
        }
        return maior;
    }
    return(
        <>
            <h1>Vetor: {props.vetor }</h1>
           <h1>Maior do vetor é: {maiorNumero}</h1>
           <button onClick={()=>setMaiorNumero(maiorElemento(props.vetor)) }>Calcular Maior Número</button> 
        </>
    )
}

export default FilhoA