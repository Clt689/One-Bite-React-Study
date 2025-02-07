import "./ContactEditor.css";
import { useReducer, useState } from "react";

export default function ContactEditor({ onCreateContact }) {
  
  // 입력받은 이름, 이메일을 저장할 State
  const [state, setState] = useState({
    name: "",
    contact: "",
  });

  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = () => {
    if (state.name === "") {
      alert("이름을 입력해주세요!")
      return;
    } else if (state.contact === "") {
      alert("연락처를 입력해주세요!")
      return;
    }

    onCreateContact(state.name, state.contact);

    setState({
      name: "",
      contact: "",
    });
  };

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
