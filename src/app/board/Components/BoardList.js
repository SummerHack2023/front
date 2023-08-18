import Link from "next/link";
import styles from "public/css/BoardList.module.css";

const BoardList = () => {
  return (
    <Link href={'/board/1'}>
      <div className={`${styles.list}`}>
        <div className={`${styles.title}`}>제목</div>
        <div className={`${styles.content}`}>내용</div>
        <div className={`${styles.etc}`}>
          <span>날짜</span>
          <span className={`${styles.name}`}>작성자</span>
        </div>
      </div>
    </Link>
  );
}

export default BoardList;