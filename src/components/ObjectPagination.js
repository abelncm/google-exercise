import { useState } from "react";
import './ObjectPagination.css';


function ObjectPagination() {

    const list = [
        {
            name: " Kevine",
            bio: "Naruto Shipuden",
            age: "25",
        },
        {
            name: " Abel",
            bio: "O disportista",
            age: "25",
        },
        {
            name: " Susana",
            bio: "Escritora",
            age: "33",
        },
        {
            name: " Luiz",
            bio: "professor",
            age: "43",
        },
        {
            name: " Joao",
            bio: "Medico",
            age: "39",
        },
    ];

    let [pos, setPos] = useState(0);
    

    function next() {
        if(pos < list.length-1){
            setPos(pos+1);
        } else {
            alert('Highest Limit reached!')
        }
    }

    function previous() {
        if(pos > 0){
            setPos(pos-1); 
        } else {
            alert('Lowest Limit reached!')
        }
    }

    function isSelected(i) {
        return i==pos?'selected':'';
    }

    return <>

        <div className="top-menu">

            {list.map((person, i) =>
                <div className={isSelected(i)} key={i} onClick={(e)=>setPos(i)}>
                    {person.name}
                </div>
            )}

        </div>

        <div>Valor do pos: {pos}</div>

        <div className="display-info">
            <button onClick={previous}>Previous</button>
            
            <div className="main">
                Name: {list[pos].name} <br />
                Age: {list[pos].age} <br />
                Bio: {list[pos].bio} <br />
            </div>

            <button onClick={next}>Next</button>

        </div>

    </>

}

export default ObjectPagination;