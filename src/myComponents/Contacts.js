import React from 'react'
import {ContactItem} from "./ContactItem";

export const Contacts = (props) => {
    return (
        <div className="container my-3">
            <h4>My Contacts</h4>
            {props.contacts.length===0?<h6 className="text-center my-3">"You have no Contacts"</h6>:props.contacts.map((contact)=>{
                return (<ContactItem key={contact.sno} contact={contact} onDelete={props.ondelete} />)
            })
            }
        </div>
    )
}


