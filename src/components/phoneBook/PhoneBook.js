import { useRef, useState } from "react";
import './PhoneBook.css';


function PhoneBook() {

    const nameRef = useRef();
    const phoneRef = useRef();
    const [phoneBookList, setPhoneBookList] = useState([]);
    console.log(phoneBookList);


    function add() {
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;

        const newContact = {
            name: name,
            phone: phone
        }

        phoneBookList.push(newContact);

        console.log(phoneBookList);

        setPhoneBookList([...phoneBookList]);
    }

    return <>
        <div className="left">
            <div>
                <label>
                    Name:
                    <input ref={nameRef} type="text" />
                </label>
            </div>
            <div>
                <label>
                    Phone number:
                    <input ref={phoneRef} type="telephone" />
                </label>
                <button onClick={add}>Add</button>
            </div>
        </div>

        <div className="right">
            {phoneBookList.map((contact, i)=>
                <div key={i} className="contact-item">
                    Name: {contact.name}<br/>
                    Phone: {contact.phone}
                </div>
            )}
        </div>
    </>
}

export default PhoneBook;