import { useState } from "react";

function Pagination2(){

    const list = ['A', 'B', 'C', 'D'];
    const [text, setText] = useState(list[0]);
    let [currentPosition, setPos] = useState(0);

    function next() {
        const nextPos = currentPosition+1;
        setPos(nextPos);
        setText(list[nextPos]);
    }

    return <>
        <button>Previous</button>
        <b>{text}</b>
        <button onClick={next}>Next</button>
    </>

}

export default Pagination2;