import HelloWorld from "../components/HelloWorld";
import HelloWorld2 from "../components/HelloWorld2";
import Pagination2 from "../components/Pagination2";


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

    </>
}

export default NewPage;