import Button from "./Button";
import './DiaryList.css';

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">  {/* 메뉴바 */}
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새 일기 쓰기"} type={"POSITIVE"}/>
      </div>
      <div className="list_wrapper">  {/* 다이어리 리스트 */}
      </div>
    </div>
  );
}

export default DiaryList;