import { useRef, useState } from "react";
import './PhoneBook.css';


function PhoneBook() {

    const nameRef = useRef();
    const phoneRef = useRef();
    const searchRef = useRef();
    const [phoneBookList, setPhoneBookList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [resultActive, setResultActive] = useState(false);
    // console.log(phoneBookList);


    function add() {
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;

        const foundContact = phoneBookList.find(contact => contact.name==name);

        if(foundContact!=undefined) {
            alert('Contact with name '+name+ ' is already in the contact list.');
            return;
        }

        const newContact = {
            name: name,
            phone: phone
        }

        phoneBookList.push(newContact);

        console.log(phoneBookList);

        setPhoneBookList([...phoneBookList]);
        nameRef.current.value=null;
        phoneRef.current.value=null;
    }

    function search() {
        let results = [];
        const searchValue = searchRef.current.value;
        
        for (let contact of phoneBookList) {
            if(contact.name.toLowerCase().includes(searchValue.toLowerCase())) {
                results.push(contact);
            }
        }
        setSearchResult(results);
        setResultActive(true);
    }

    function clearSearch() {
        searchRef.current.value=null;
        setSearchResult([]);
        setResultActive(false);
    }

    function removeContact(i) {
        phoneBookList.splice(i, 1);
        setPhoneBookList([...phoneBookList]);
    }

    function resultMessage() {
        if(resultActive && searchResult.length>0) {
            return searchResult.length + 'results found!';
        } else if (resultActive && searchResult.length==0) {
            return 'No results found!';
        }
    }

    return <div className="wrapper">
        <div className="left">
            <div>
                <label>
                    Name:
                    <input ref={nameRef} type="text" />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input ref={phoneRef} type="tel" />
                </label>
                <button onClick={add}>Add</button>
            </div>

            <h4>My contact list:</h4>

            {phoneBookList.length==0 && 
                <span>No contact in your phonebook!</span>}

            {phoneBookList.map((contact, i)=>
                <div key={i} className="contact-item">
                    Name: {contact.name}<br/>
                    Phone: {contact.phone}
                    <button onClick={()=>removeContact(i)}>Delete</button>
                </div>
            )}
        </div>

        <div className="right">
            <input ref={searchRef} type="text" />
            <button onClick={search}>Search</button>
            <button onClick={clearSearch}>Clear</button>

            <h4>Search result:</h4>
            
            {resultActive && searchResult.length>0 && <span>
                {searchResult.length} results found!
            </span>}

            {resultActive && searchResult.length==0 && <span>
                No results found!
            </span>}

            {/* <span>{resultMessage()}</span> */}

            {searchResult.map((contact, i)=>
                <div key={i} className="contact-item">
                    Name: {contact.name}<br/>
                    Phone: {contact.phone}
                </div>
            )}
            
        </div>
    </div>
}

export default PhoneBook;