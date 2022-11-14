import { useState } from "react";

function ObjectPagination(){

    const list = ['A', 'B', 'C', 'D'];
    const [text, setText] = useState(list[0]);
    let [currentPosition, setPos] = useState(0);

    function next() {
        if(currentPosition < list.length-1){
            const nextPos = currentPosition+1;
            setPos(nextPos);
            setText(list[nextPos]);            
        } else {
            alert('Highest Limit reached!');
        }  
    }

    function previous() {
        if(currentPosition > 0) {
            const prevPos = currentPosition-1;
            setPos(prevPos);
            setText(list[prevPos]);
        } else {
            alert('Lowest limit reached!');
        }
    }

    return <>
        <button onClick={previous}>Previous</button>
        <b>{text}</b>
        <button onClick={next}>Next</button>
    </>

}

export default ObjectPagination;