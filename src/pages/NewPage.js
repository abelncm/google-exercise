import HelloWorld from "../components/HelloWorld";
import HelloWorld2 from "../components/HelloWorld2";
import ObjectPagination from "../components/ObjectPagination";
import Pagination2 from "../components/Pagination2";
import Login from "../components/Login";


function NewPage() {

    return <>
        <h1>This is my new page</h1>

        <HelloWorld />
        <br/>
        <br/>
        <HelloWorld2 />
        <br/>
        <br/>
        <Pagination2 />
        <br/>
        <br/>
        <ObjectPagination />
        <br/>
        <br/>
        <Login />

    </>
}

export default NewPage;