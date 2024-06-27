import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { useReducer, useRef, createContext } from "react";
import New from "./pages/New";

// 데이터 작업

const mockData = [
  {
    id: 1,
    createDate: new Date(2024, 1, 29).getTime(),
    emotionId: 1,
    content: "1번에 일기 내용",
  },
  {
    id: 2,
    createDate: new Date(2024, 5, 20),
    emotionId: 2,
    content: "2번에 일기 내용",
  },
  {
    id: 3,
    createDate: new Date(2024, 5, 21),
    emotionId: 3,
    content: "3번에 일기 내용",
  },
  {
    id: 4,
    createDate: new Date(2024, 5, 22),
    emotionId: 4,
    content: "4번에 일기 내용",
  },
  {
    id: 5,
    createDate: new Date().getTime(),
    emotionId: 5,
    content: "5번에 일기 내용",
  },
];
// Reducer / action : dispatch 속 객체
function reducer(data, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...data];
    case "UPDATE":
      return data.map((item) =>
        // Data 상의 변형되지 않은 값은 그대로(action.data.id) / 변형된 것은 item.id
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return data.filter((item) => String(item.id) !== String(action.data.id));
    default:
      return;
  }
}
//url mapping
//1.url ~~/=>Home page
//2.~~~/new=>New page
//3.~~~/diary => Diary page
//4.~~~/edit => Edit page

// 공유데이터 처리를 위해 createContext
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// =============================================================== App
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(6);

  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId: emotionId,
        content: content,
      },
    });
  };
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  };
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: { id },
    });
  };
  const onButtonClick = () => {
    alert(`Button click`);
  };
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
