import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  return (
    <div>
      <div>
        <Header
          title="새 일기 쓰기"
          leftChild={<Button onClick text={"< 뒤로 가기"}/>}
        />
        <Editor />
      </div>
      <div></div>
    </div>
  );
}

export default New;