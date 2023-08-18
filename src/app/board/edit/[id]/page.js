import "public/css/write.css";

const Edit = () => {
  return (
    <div
      style={{
        background: "#f1f1f1",
      }}
      className="flex items-center justify-center"
    >
      <form
        action="/api/boardEdit"
        method="POST"
        className="flex items-center flex-col write-background"
      >
        <div className="title-box">
          <input
            type="text"
            name="title"
            className="title_txt"
            placeholder="제목"
            // defaultValue={result.title}
          />
        </div>
        <div className="content-box">
          <textarea
            name="content"
            className="content_txt"
            placeholder="내용을 입력하세요."
            // defaultValue={result.content}
          ></textarea>
        </div>
        <input
          style={{ display: "none" }}
          name="_id"
          // defaultValue={result._id.toString()}
        />
        <button type="submit" className="submitBtn">
          발행
        </button>
      </form>
    </div>
  );
};

export default Edit;
