const SaveData = () => {
    const saveData = () =>{
        const aluno = { nome: "Airton", curso: "SI" }
        localStorage.setItem("aluno01", JSON.stringify(aluno))
}
return (
    <div>
        <h1>Saving Data...</h1>
        {saveData()}
        <LoadData/>
    </div>
)
}

const LoadData = () => {
    const loadData = () => {
        const alunoCarregado = JSON.parse(localStorage.getItem(("aluno01")))
        return(
            <div>
                <h3>Nome: {alunoCarregado.nome}</h3>
                <h3>Curso: {alunoCarregado.curso}</h3>
            </div>
        )
    }
    return(
        <div>
            <h1>Loading Data...</h1>
            {loadData()}
        </div>
    )

}
export default SaveData