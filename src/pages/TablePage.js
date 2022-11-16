import Table from "../components/Table";


function TablePage() {

    const listOfPersons = [
        {
            "firstName": "Bruno",
            "lastName": "Cardoso",
            "gender": "Male",
        },
        {
            "firstName": "Joana",
            "lastName": "Fernandes",
            "gender": "Female",
        },
        {
            "firstName": "Pedro",
            "lastName": "Garcia",
            "gender": "Male",
        },
        {
            "firstName": "Ilda",
            "lastName": "Barbosa",
            "gender": "Fenale",
        },
        {
            "firstName": "Mira",
            "lastName": "Sanches",
            "gender": "Female",
        }
    ];

    return <>
        <h1>My table page</h1>

        <Table list={listOfPersons}/>

    </>
}

export default TablePage;