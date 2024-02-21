import React, { useState } from 'react';
import './App.css';



function App() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', number: '' });

  const addContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact({ name: '', number: '' });
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Contact List App</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={newContact.number}
          onChange={(e) => setNewContact({ ...newContact, number: e.target.value })}
        />
        <button onClick={addContact}>ADD Contact</button>
      </div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.number}
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
