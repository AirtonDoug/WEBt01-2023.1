const Calculadora = () => {
    const somar = (x,y) =>{
        return x + y;
    }
    const subtrair =(x,y) => x - y;

    function multiplicar(x,y){
        return x * y;
    }
    const dividir =(x,y) =>{
        return x/y;
    }
    const potencia = (x,y) => x**y;

    return(
        <div>
            <h1>O resultado da Soma é:{somar(30,6)}</h1>
            <h1>O resultado da Subtração é:{subtrair(30,6)}</h1>
            <h1>O resultado da Multiplicação é:{multiplicar(30,6)}</h1>
            <h1>O resultado da Divisao é: {dividir(somar(5,5),subtrair(6,1))}</h1>
            <h1>O resultado da potencia é: {potencia(2,3)}</h1>

        </div>
    )


}
export default Calculadora