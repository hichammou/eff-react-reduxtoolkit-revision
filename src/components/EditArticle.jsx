import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteArticle,
  editArticle,
  getAllArticles,
  getArticle,
} from "../reducers/articleReducer";

function EditArticle() {
  const { id } = useParams();
  const article = useSelector(getAllArticles).find(
    (article) => article.id === id
  );

  const [title, setTitle] = useState(article?.title);
  const [body, setBody] = useState(article?.body);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editArticle({ id, title, body }));
    navigate("/all-articles");
  };

  return (
    <div>
      <h1>Edit Article</h1>
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
      <button
        onClick={() => {
          dispatch(deleteArticle(id));
          navigate("/all-articles");
        }}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "4px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Delete this article
      </button>
    </div>
  );
}

export default EditArticle;
