import { useRef, useState } from "react";

function TodoList() {

    const input = useRef();
    const [tasks, setTasks] = useState([]);

    function add() {
        let newTask = input.current.value;
        tasks.push(newTask);

        console.log(tasks);

        setTasks([...tasks]);

        input.current.value='';
    }

    return <>
        <h1>Todo Component</h1>
        
        <input ref={input} type='text' placeholder="Write task"/>

        <button onClick={add}>Add</button>

        <ul>
            {tasks.map((task,i)=>
                <li key={i}>{task}</li>
            )}
        </ul>
    </>

}

export default TodoList;