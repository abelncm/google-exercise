import { useEffect, useState } from "react";
import Clock from "../components/Clock";
import Table from '../components/Table'
import WordCounter from "../components/WordCounter";

function TablePage() {

    const [listOfPersons, setListOfPersons] = useState([
        {
            firstName: "Bruno",
            lastName: "Cardoso",
            gender: "Male",
        },
        {
            firstName: "Joana",
            lastName: "Fernandes",
            gender: "Female",
        },
        {
            firstName: "Pedro",
            lastName: "Garcia",
            gender: "Male",
        },
        {
            firstName: "Ilda",
            lastName: "Barbosa",
            gender: "Fenale",
        },
        {
            firstName: "Mira",
            lastName: "Sanches",
            gender: "Female",
        }
    ]);

    function remove(pos) {
        listOfPersons.splice(pos,1);
        setListOfPersons([...listOfPersons]);
    }

    return <>
        <h1>My table page</h1>
        <Clock />
        <Table list={listOfPersons} rm={remove}/>
        <br/>
        <WordCounter />
    </>
}

export default TablePage;