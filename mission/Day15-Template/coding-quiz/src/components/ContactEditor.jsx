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
    if (state.name === "") {
      alert("이름을 입력해주세요.")
      return;
    }
    else if (state.contact === "") {
      alert("이메일(연락처)을 입력해주세요.")
      return;
    }
    onCreateContact(state.name, state.contact);
    
    setState({
      name: "",
      contact: "",
    })
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
