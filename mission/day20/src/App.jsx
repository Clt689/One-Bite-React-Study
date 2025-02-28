import './App.css'
import { useReducer, useRef, createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT": { 
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE":{
      // item.id와 action.data.id가 같다면, 수정할 내용인 action.data를 넣기
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter(
        (item) => String(item.id) !== String(action.id)
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // 현재 로딩 중인지 아닌지의 상태를 보관하는 State가 필요
  const [isLoading, setIsLoading] = useState(true);

  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    // LocalStorage에 diary라는 키값으로 저장된 데이터를 꺼내 옴
    const storedData = localStorage.getItem("diary");
    
    if (!storedData) {
      setIsLoading(false);
      return ;
    }
    
    // 문자열 형태로 저장되어있는 일기 데이터를, 배열 형태로 변환
    const parsedData = JSON.parse(storedData);

    if (!Array.isArray(parsedData)) { 
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) { 
        maxId = Number(item.id)
      }
    })

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, [])

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

  if (isLoading) { 
    return <div>데이터 로딩 중입니다..</div>
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onDelete,
            onUpdate,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;
