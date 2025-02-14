import "./App.css";
import { useReducer, useRef } from "react";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return [action.data, ...state];
    case "delete":
      return state.filter((it) => it.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0);
  
  const onCreateContact = (name, contact) => {
    dispatch({
      type: "create",
      data: {
        id: idRef.current++,
        name,
        contact,
      }
    })
  }

  const onDeleteContact = (targetId) => {
    dispatch({
      type: "delete",
      targetId,
    });
  }

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreateContact={onCreateContact} />
      </section>
      <section>
        <ContactList
          contacts={contacts}
          onDeleteContact={onDeleteContact}
        />
      </section>
    </div>
  );
}

export default App;
