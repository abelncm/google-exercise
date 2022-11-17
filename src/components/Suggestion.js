import { useRef, useState } from "react"
import styles from './Suggestion.module.css';

export default function Suggestion() {

    const fruitBoxRef = useRef();
    const [fruits, setFruits] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    function add() {
        const toAddFruit = fruitBoxRef.current.value;
        fruits.push(toAddFruit);
        setFruits([...fruits]);
        fruitBoxRef.current.value=null;
    }

    function searchFruit(event) {
        const search = event.target.value;
        if(search=='') {
            setSuggestions([]);
            return;
        }

        const results = fruits.filter(fruit=>
            fruit.toLowerCase().includes(search.toLowerCase()));
        setSuggestions(results);
    }

    return <>
        <input ref={fruitBoxRef} type="text" placeholder="Write fruit name"/>
        <button onClick={add}>Add</button>
        <ul>
            {fruits.map((fruit, i)=>
                <li key={i}>{fruit}</li>
            )}
        </ul>
        <input type="text" onChange={searchFruit} placeholder="Search for fruit" />
        
        {suggestions.length>0 && <div className={styles.suggestionBox}>
            {suggestions.map((suggestion, i) =>
                <div key={i} className={styles.item}>{suggestion}</div>
            )}
        </div>}
    </>

}