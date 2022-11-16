
function Table(props) {


    return <table border="1">

        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender Name</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.list.map((person, i) =>
                <tr key={i}>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.gender}</td>
                    <td>
                        <button onClick={()=>props.rm(i)}>Remove</button>
                    </td>
                </tr>
            )}
        </tbody>

    </table>
}

export default Table;

