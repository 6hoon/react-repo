import { useParams } from "react-router-dom";
const Diary =()=>{
  //동적으로 링크연결
  //url 주소에 마지막 주소로 연결
  const params = useParams();
  return (
    <>
      <div>
        <h1>HEADER MENU(DIARY)</h1>
      </div>
      <section>
        <h1>DIARY {params.id}번째 내용입니다.</h1>
      </section>
      <div>
        <h1>FOOTER(DIARY)</h1>
      </div>
    </>
  );
};
export default Diary;