import { useState } from "react";
import "./ContactEditor.css";

export default function ContactEditor({ onCreateContact }) {
  const [state, setState] = useState({
    name: "",
    contact: ""
  })

  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = () => {
    onCreateContact(state.name, state.contact);
    console.log(state.name, state.contact);
  }
  
  return (  
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          name="name"
          value={state.name}
          onChange={onChangeState}
          className="name"
          placeholder="이름 ..." />
        <input
          name="contact"
          value={state.contact}
          onChange={onChangeState}
          className="contact"
          placeholder="연락처(이메일) ..." />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
