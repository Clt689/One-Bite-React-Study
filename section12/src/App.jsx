import './App.css'
import { useReducer, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

// 초기값 설정
const mockData = [
  {
    id : 1,
    createdDate: new Date().getTime(),
    emotionId : 1,
    content: "1번 일기 내용",
  },
  {
    id : 2,
    createdDate: new Date().getTime(),
    emotionId : 2,
    content: "2번 일기 내용",
  }
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": return [action.data, ...state];
    // case "UPDATE": return;
    // case "DELETE": return;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, [mockData]);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })

  }

  // 기존 일기 수정
  const onUpdate = () => {}

  // 기존 일기 삭제
  const onDelete = () => {}

  return (
    <>
      <button onClick={() => {
        onCreate(new Date().getTime(), 1, "Hi");
      }}>
        일기 추가 test
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;
