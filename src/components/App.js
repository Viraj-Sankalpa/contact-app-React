// import React from "react";
import React, { useEffect, useState } from "react";
import AddContact from './AddContact';
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts,contact]);
  }

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
