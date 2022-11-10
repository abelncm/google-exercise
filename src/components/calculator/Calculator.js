import { useState } from "react";

function Calculator(){

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operacao, setOperacao] = useState("soma")
    const [resultado, setResultado] = useState(0)

    function calculadora(){
        let total;
        if(operacao == "Soma"){
            total = parseFloat(num1) + parseFloat(num2)

        } else if(operacao == "Subtracao"){
            total = parseFloat(num1) - parseFloat(num2)

        }else if(operacao == "Multiplicacao") {
            total = parseFloat(num1) * parseFloat(num2)

        }else {
            total = parseFloat(num1) / parseFloat(num2)
        }
        setResultado(total);
    }
   

    return <div className="container">

        <h1>Calculator of the year</h1>

        <label>First Number</label>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        <label>Second Number</label>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>

        <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
            <option>Soma</option>
            <option>Subtracao</option>
            <option>Multiplicacao</option>
            <option>Divisao</option>
        </select>

        <button onClick={()=> calculadora()}>=</button>

        <label>{resultado}</label>
        
        

    </div>
}

export default Calculator