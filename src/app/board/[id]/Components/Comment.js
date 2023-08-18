import Image from "next/image";
import styles from "public/css/Comment.module.css";

const Comment = () => {
  return (
    <div className={`${styles.comment}`}>
      <div className="flex items-center mb-1">
        <Image
          src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png"
          width={25}
          height={25}
          alt="profile"
        />
        <div className={`${styles.commentWriter}`}>작성자</div>
      </div>
      <div className={`${styles.commentContent}`}>댓글</div>
      <div style={{ color: "#a6a6a6", fontSize: "12px" }}>2023.08.16</div>
    </div>
  );
};

export default Comment;
