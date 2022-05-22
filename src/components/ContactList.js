import React from "react";

const ContactList = (props) => {
    const renderList = props.contacts.map((contact) =>{
        return (
            <li className="d-flex justify-content-between align-items-start mb-4">
                <div className="ms-2 me-auto">
                <div className="fw-bold">{contact.name}</div>
                {contact.email}
                </div>
                <span className="badge bg-primary rounded-pill">14</span>
            </li>
        );
    })
    return(
        <section className="list">
            <div className="container">
                <h2 className="text-center mt-5">Contact List</h2>
                <ul className="p-0 my-5">
                    {renderList}
                </ul>
            </div>
        </section>
    );
}

export default ContactList;