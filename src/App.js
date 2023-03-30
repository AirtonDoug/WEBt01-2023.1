//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
//import MyProps from './components/02MyProps';
//import Pai from './components/atividade01/questao01/01Pai'
import * as PC from './components/atividade01/questao02/02MeuPC'
/*function App() {
  return (
    <MyProps
      nome="Airton Douglas Costa de Sousa"
      idade={28}
      curso="Sistemas de Informação"
    />
  );
}
*/

function App(){
  return(
      <div>
        <PC.Memoria nome = "HyperX" preco={350}/>
        <PC.PlacaDeVideo nome =  "GeForce" preco = {3980}/>
        <PC.PlacaMae nome = "ASUS" preco={1200}/>
      </div>
    
  )
}



export default App;
