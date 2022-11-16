import { useRef, useState } from "react";


export default function WordCounterTwofor() {

    const [numChars, setNumChars] = useState(0);
    const [numWords, setNumWords] = useState(0);
    const findWordRef = useRef();
    const textAreaRef = useRef();
    const [wordRepeated, setWordRepeated] = useState(0);

    function counter(event) {
        const text = event.target.value;

        const numberOfChars = text.length;
        const numberOfWords = text.split(' ').length;

        setNumChars(numberOfChars);
        setNumWords(numberOfWords);
    }


    function findWordCount() {
        const text = textAreaRef.current.value;
        const wordToFind = findWordRef.current.value;

        const words = text.split(' ');
        let counter = 0;
        
        for(let word of words){
            if(word == wordToFind) {
                counter++;
            }
        }
        
        setWordRepeated(counter);
    }

    return <>
        <textarea style={{ width: 300, height: 100 }}
            ref={textAreaRef} onChange={counter}></textarea><br />

        <span>Number of characters: {numChars}</span><br />
        <span>Number of words: {numWords}</span><br /><br />

        <span>Find word to count:</span>
        <input type="text" ref={findWordRef} />
        <button onClick={findWordCount}>Count</button>
        <span>{wordRepeated}</span>
    </>

}