import { useEffect, useState } from "react"

const VotacaoCidades = () => {

    const [cidadeA,setCidadeA] = useState({nome:"Fortaleza",votos:0})
    const [cidadeB,setCidadeB] = useState({nome:"Quixadá",votos:0}) 
    const [cidadeC,setCidadeC] = useState({nome:"Crateús",votos:0})
    const [cidadeD,setCidadeD] = useState({nome:"Itapipoca",votos:0})
    const [maisVotada,setMaisVotada] = useState("")
    const [menosVotada,setMenosVotada] = useState("")
    useEffect(
        ()=>{
            let cidades =[cidadeA,cidadeB,cidadeC,cidadeD]
            let maior=cidades[0]
            let menor=cidades[0]
            for(let i=0; i < cidades.length; i++){
                if(cidades[i].votos > maior.votos) maior = cidades[i]
                if(cidades[i].votos < menor.votos) menor = cidades[i]
            }
            setMaisVotada("")
            setMenosVotada("")
            for(let i =0; i < cidades.length;i++){
                if(cidades[i]===maior) setMaisVotada((prev)=> prev + " " + cidades[i].nome )
                if(cidades[i]===menor) setMenosVotada((prev)=> prev + " " + cidades[i].nome )
            }


        },[cidadeA.votos,cidadeB.votos,cidadeC.votos,cidadeD.votos]
    )

    return(
        <>
            <h1 style={{textAlign: "center"}}>Votação de Cidades</h1>

            <h2>Cidade:{cidadeA.nome}</h2>
            <h3>Votos: {cidadeA.votos}</h3>
            <button onClick={(prevObj)=>setCidadeA({...cidadeA,votos:cidadeA.votos+1})}>Votar</button>

            <h2>Cidade:{cidadeB.nome}</h2>
            <h3>Votos: {cidadeB.votos}</h3>
            <button onClick={(prevObj)=>setCidadeB({...cidadeB,votos:cidadeB.votos+1})}>Votar</button>

            <h2>Cidade:{cidadeC.nome}</h2>
            <h3>Votos: {cidadeC.votos}</h3>
            <button onClick={(prevObj)=>setCidadeC({...cidadeC,votos:cidadeC.votos+1})}>Votar</button>

            <h2>Cidade:{cidadeD.nome}</h2>
            <h3>Votos: {cidadeD.votos}</h3>
            <button onClick={(prevObj)=>setCidadeD({...cidadeD,votos:cidadeD.votos+1})}>Votar</button>

            <h2>Cidade mais votada:{maisVotada}</h2>
            <h2>Cidade menos votada:{menosVotada}</h2>

        </>
    )

}
export default VotacaoCidades