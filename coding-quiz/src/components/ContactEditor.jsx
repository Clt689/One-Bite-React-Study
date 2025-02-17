import "./ContactEditor.css";
import { useContext, useRef, useState } from "react";
import { ContactDispatchContext } from "../App";

export default function ContactEditor() {
  // Context 객체로부터 onCreateContact 함수를 공급받도록 수정
  const { onCreateContact } = useContext(ContactDispatchContext);

  const nameRef = useRef();
  const contactRef = useRef();
  
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
      nameRef.current.focus(); // 이름 입력 필드에 focus
      alert("이름을 입력해주세요!")
      return;
    } else if (state.contact === "") {
      contactRef.current.focus();
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
            ref={nameRef}
            name="name"
            value={state.name}
            onChange={onChangeState}
            className="name"
            placeholder="이름 ..." />
          <input
            ref={contactRef}
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
