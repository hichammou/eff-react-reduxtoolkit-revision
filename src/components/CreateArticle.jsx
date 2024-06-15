import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addArticle } from "../reducers/articleReducer";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle({ title, body }));
    navigate("/all-articles");
  };

  return (
    <div>
      <h1>Create Article</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <input
          type="text"
          placeholder="Article title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          placeholder="Article body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            height: "100px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateArticle;
