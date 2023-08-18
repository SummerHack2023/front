'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import styles from 'public/css/CommentInput.module.css'
import { useState } from "react";

const CommentInput = ({ boardListId }) => {
  const [comment, setComment] = useState('')
  return (
    <div className={`${styles.commentInputDiv} flex justify-center items-center`}>
      <input
        type="text"
        className={`${styles.commentInput}`}
        placeholder="댓글을 입력하세요."
        onChange={(e)=> setComment(e.target.value)}
      />
      <button onClick={()=>{
        fetch('/api/commentPost', {
          method: 'POST',
          body: JSON.stringify({comment: comment, board: boardListId })
        })
        // 댓글 작성후 댓글칸 비워줘야함
      }} className={`${styles.commentAddDiv} flex justify-center`}>
        <FontAwesomeIcon icon={faPencil} className={`${styles.commentAddIcon}`} />
      </button>
    </div>
  );
};

export default CommentInput;
