import { ContactsList, ContactsTitle, MainContainer } from "components/App.styled";
import { ContactsBook } from "components/ContactsBook/ContactsBook";
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";

export default function Contacts() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  

  return (
    <div>
        <MainContainer>
          <ContactsList>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactsBook />
          </ContactsList>
        
          <ContactsForm />
        </MainContainer>
      </div>
  )
}