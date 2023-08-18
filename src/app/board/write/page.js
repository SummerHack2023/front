import "public/css/write.css";

const Write = async() => {
  return (
    <div
     style={{ background: "#d6d6d655" }}
      className="flex items-center justify-center"
    >
      <form action="/api/boardPost" method="POST" className="flex items-center flex-col write-background">
        <div className="title-box">
          <input type="text" name="title" className="title_txt" placeholder="제목" />
        </div>
        <div className="content-box">
          <textarea
            name="content"
            className="content_txt"
            placeholder="내용을 입력하세요."
          ></textarea>
        </div>
        <input
          style={{ display: "none" }}
          name="writer"
          // defaultValue={session.user.name}
        />
        <button type="submit" className="submitBtn">발행</button>
      </form>
    </div>
  );
};

export default Write;
