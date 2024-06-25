import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onupdate, ondelete }) => {
  const onChangeCheckbox = () => {
    onupdate(id);
  };

  const onClickDelete = () => {
    ondelete(id);
  };

  return (
    <>
      <div className="TodoItem">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
        <span className="content">{content}</span>
        <span className="date">{new Date(date).toLocaleDateString()}</span>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </>
  );
};
// 고차 컴포넌트 (HOC : High Order Component) : 화면만 담당하는 컴포넌트가 아니라
// ㄴ 차원을 높혀서, 조건에 따라 랜더링 기능까지 적용된 컴포넌트

// export default memo(TodoItem,(이전,이후)=>{ });
// ㄴ 이전, 이후 값을 비교
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 값이 바뀌었을 때 -> 랜더링
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   // 객체: onupdate, ondelete는 함수 주소 : 비교 X
//   return true;
// });
export default memo(TodoItem);
