import React from 'react'

export const ContactItem = (props) => {
    return (
        <div className="container my-3">
            <p>{props.contact.name}</p>
            <p>{props.contact.email}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.contact)}}> Delete</button>
        </div>
    )
}
