import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";

const New = () => {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  console.log(searchParams.get("age"));
  return (
    <>
      <div className="New">
        <Header
          title={"새 일기 쓰기"}
          leftChild={
            <Button
              text={"< 뒤로가기"}
              colorType={"NORMAL"}
              onClick={() => {
                nav(-1);
              }}
            />
          }
        />
        <Editor />
      </div>
    </>
  );
};
export default New;
