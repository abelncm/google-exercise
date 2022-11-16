import { useState } from "react";


export default function WordCounter() {

    const [numChars, setNumChars]= useState(0);
    const [numWords, setNumWords]= useState(0);

    function counter(event) {
        const text = event.target.value;

        const numberOfChars = text.length;
        const numberOfWords = text.split(' ').length;

        setNumChars(numberOfChars);
        setNumWords(numberOfWords);
    }

    return <>
        <textarea style={{width:300, height:100}} 
            onChange={counter}></textarea><br/>
            
        <span>Number of characters: {numChars}</span><br/>
        <span>Number of words: {numWords}</span>
    </>

}