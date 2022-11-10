import Calculator from "../../components/calculator/Calculator"
import Counter from "../../components/counter/Counter"
import Mensagem from "../../components/mensagem/Mensagem"
import Calculator2 from "../../components/calculator2/Calculator2"

function CounterPage() {

    return <div>
      <h1>Bem Vindo ao CounterPage</h1>
      <Counter/>
      <Mensagem/>
      <Calculator/>
      <Calculator2/>
    </div>
}

export default CounterPage