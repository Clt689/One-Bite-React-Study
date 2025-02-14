import "./ContactItem.css";
import { memo } from "react";

function ContactItem({id, name, contact, onDeleteContact}) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => {onDeleteContact(id)}}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);