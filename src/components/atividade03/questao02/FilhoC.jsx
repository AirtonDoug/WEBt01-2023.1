import { useState } from "react"

const FilhoC = (props) => {

    const [media,setMedia] = useState(0)

    const calcMedia =(vec)=>{
        let soma = 0
        for(let i =0;i < vec.length ; i++){
            soma+=vec[i]
        }
        return soma/vec.length
    }

    return(
        <>
        <h1>A Média Aritimética do vetor é: {media}</h1>
        <button onClick={()=>setMedia(calcMedia(props.vetor))}>Calcular Media</button>
        </>
    )
}

export default FilhoC