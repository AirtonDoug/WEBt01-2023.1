//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
import './App.css';
import MyProps from './components/02MyProps';
function App() {
  return (
    <MyProps
      nome="Airton Douglas Costa de Sousa"
      idade={28}
      curso="Sistemas de Informação"
    />
  );
}

export default App;
