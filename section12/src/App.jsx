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
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      // item.id와 action.data.id가 같다면, 수정할 내용인 action.data를 넣기
      return state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.id)
      );
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
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
    });
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }

  return (
    <>
      <button onClick={() => {
        onCreate(new Date().getTime(), 1, "Hi");
      }}>
        일기 추가 테스트
      </button>

      <button onClick={() => {
        onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.");
      }}>
        일기 수정 테스트
      </button>

      <button onClick={() => {
        onDelete(1);
      }}>
        일기 삭제 테스트
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
