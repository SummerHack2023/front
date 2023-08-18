import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import BoardList from './Components/BoardList'
import Link from "next/link";
import 'public/css/board.css'

const Board = () => {
  return (
    <div className="background flex items-center justify-center">
      <div className="board">
        <div className="board-title">
          <span>게시판</span>
        </div>
        <Link href="/board/write" className="write">
          <span style={{ color: "grey" }}>새 글 작성</span>
          <FontAwesomeIcon icon={faPen} className="modifyBtn" />
        </Link>
        <div className="write-boxes">
          <BoardList />
          <BoardList />
          <BoardList />
          {/* {boardList.map((a, i) => (
            <BoardList
              key={i}
              id={a._id.toString()}
              title={a.title}
              content={a.content}
              time={a.time}
              writer={a.writer}
            /> 
          ))}*/}
        </div>
      </div>
    </div>
  );
};

export default Board;
