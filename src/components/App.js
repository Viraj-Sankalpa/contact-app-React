// import React from "react";
import React, { useState } from "react";
import AddContact from './AddContact';
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";

function App() {

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) =>{
    console.log(contact);
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;