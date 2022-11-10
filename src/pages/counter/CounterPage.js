import Calculator from "../../components/calculator/Calculator"
import Counter from "../../components/counter/Counter"
import Mensagem from "../../components/mensagem/Mensagem"

function CounterPage() {

    return <div>
      <h1>Bem Vindo ao CounterPage</h1>
      <Counter/>
      <Mensagem/>
      <Calculator/>
    </div>
}

export default CounterPage