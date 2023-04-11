const Filho = ({falarComPai}) => {

   
    
    return(
        <div>
            <h1>Filho</h1>
            <button
                onClick={
                    () => falarComPai("Tudo bem?")    
                }
            >
                Enviar Mensagem pro Pai
            </button>
        </div>
    )
}
export default Filho