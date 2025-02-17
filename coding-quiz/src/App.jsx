import "./App.css";
import { useReducer, useMemo, useRef, useCallback, createContext, memo } from "react";
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

// contacts State를 공급할 Context 객체 생성
export const ContactStateContext = createContext();

// onCreateContact, onRemoveContact를 공급할 Context 객체 생성
export const ContactDispatchContext = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0);
  
  const onCreateContact = useCallback((name, contact) => {
    dispatch({
      type: "create",
      data: {
        id: idRef.current++,
        name,
        contact,
      }
    })
  }, [])

  const onDeleteContact = useCallback((targetId) => {
    dispatch({
      type: "delete",
      targetId,
    });
  }, [])

  const memoizedDispatches = useMemo(() => (
    { onCreateContact, onDeleteContact }
  ), []);

  return (
    <div className="App">
      {/* 3. contact State 공급을 위해 Context.Provider 설정 */}
      <ContactStateContext.Provider value={contacts}>
        {/* 4. onCreateContact, onRemoveContact 공급을 위해 Context.Provider 설정 */}
        <ContactDispatchContext.Provider value={memoizedDispatches}>
          <h2>Contact List</h2>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
