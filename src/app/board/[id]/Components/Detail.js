"use client";

import Comment from "./Comment";
import CommentInput from "./CommentInput";
import Link from "next/link";
import Image from "next/image";
import styles from "public/css/Detail.module.css";

const Detail = () => {
  return (
    <div className="flex items-center flex-col h-full w-1000">
      <div className={`${styles.boardTitle}`}>
        <span>게시판</span>
      </div>
      <div className={`${styles.detailContents}`}>
        <div className={`${styles.writing}`}>
          <div className={`${styles.profile} flex items-center`}>
            <div className="flex">
              <Image
                src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png"
                width={50}
                height={50}
                alt="profile"
              />
            </div>
            <div className={`${styles.imgR} flex flex-col justify-center`}>
              <div>작성자</div>
              <div style={{ color: "#a6a6a6", fontSize: "12px" }}>작성일</div>
            </div>
            <div className={`${styles.btns}`}>
              <Link href={`/`} className="mr-1 decoration-[#d6d6d6]">
                수정
              </Link>
              <button>삭제</button>
            </div>
          </div>
          <div className={`${styles.contents}`}>
            <div className="text-2xl mb-1">제목</div>
            <div>내용</div>
          </div>
        </div>
        <Comment />
        <CommentInput />
      </div>
    </div>
  );
};

export default Detail;
