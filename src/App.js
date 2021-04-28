import './App.css';
import Header from "./myComponents/Header";
import {Contacts} from "./myComponents/Contacts";
import {Addcontact} from "./myComponents/Addcontact";
import React,{useState,useEffect} from 'react';

function App() {
  let initContact;
  if(localStorage.getItem('contacts')===null){
    initContact=[];
  }
  else{
    initContact=JSON.parse(localStorage.getItem("contacts"));
  }

  const [contacts, setcontacts] = useState(initContact);

  let onDelete=(contact)=>{
    setcontacts(contacts.filter((e)=>     e!==contact));
    localStorage.setItem("contacts",JSON.stringify(contacts))

  }

  let addcontact=(name,email)=>{
    let sno;
    if(contacts.length===0){
      sno=0;
    }
    else{
      sno=contacts[contacts.length-1].sno + 1;
    }
    let mycontact={
      sno:sno,
      name:name,
      email:email
    }
    setcontacts([...contacts,mycontact]);
  };

  useEffect(() => {
    localStorage.setItem("contacts",JSON.stringify(contacts));
  }, [contacts])


  return (
    <>
      <Header/>
      <Addcontact AddContact={addcontact} />
      <Contacts contacts={contacts} ondelete={onDelete} />
    </>
  );
}

export default App;



