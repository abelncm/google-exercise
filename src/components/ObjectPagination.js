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


    return <>

        <div className="top-menu">

            {list.map((person, i) =>
                <div key={i}>{person.name}</div>
            )}

        </div>

        <div className="display-info">

            <button>Previous</button>
            <div>
                Name: {list[pos].name} <br />
                Age: {list[pos].age} <br />
                Bio: {list[pos].bio} <br />
            </div>
            <button>Next</button>

        </div>

    </>

}

export default ObjectPagination;