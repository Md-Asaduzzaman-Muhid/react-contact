import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import ContactAdd from './ContactAdd';
import ContactList from './ContactList';
function App() {
  const contacts = [
    {
      id : 1,
      name : "Muhid",
      email : "pg@pg.com"
    },
    {
      id : 2,
      name : "Muhid2",
      email : "pg2@pg.com"
    },
    {
      id : 3,
      name : "Muhid3",
      email : "pg3@pg.com"
    }
  ]
  return (
    <div className='section-wrapper'>
        <Header />
        <ContactAdd />
        <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
