import PhoneBook from "../components/phoneBook/PhoneBook";
import MyTitle from "../components/styled/MyTitle";
import StyledButton from "../components/styled/StyledButton";


function ContactPage() {

    return <>
        <MyTitle>This is my contact page</MyTitle>
        <PhoneBook />
        <StyledButton>Another button</StyledButton>

    </>
}

export default ContactPage;