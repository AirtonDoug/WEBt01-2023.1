import { useEffect, useState } from "react"

const FunctionEstados = () =>{

    const [contador,setContador] = useState(0)
    const [iseven,setIseven] = useState("Par")

    useEffect(
        () =>{
        if(contador%2 === 0) setIseven("Par")
        else setIseven("Impar")
    },[contador]
    )    


    


    return(
        <>
        <h1>Contador:{contador}</h1>
        <h2>{iseven}</h2>
        <button onClick={()=> setContador((contador + 1))}>
            aumentar contador
        </button>

        </>
    )
}    

export default FunctionEstados