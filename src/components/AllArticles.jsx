import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllArticles } from "../reducers/articleReducer";

function AllArticles() {
  const articles = useSelector(getAllArticles);

  return (
    <div>
      <h1>All articles</h1>
      <div>
        {articles?.map((ar) => (
          <div
            key={ar.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ color: "#333" }}>{ar.title}</h2>
              <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{ar.body}</p>
            </div>
            <Link
              to={`/edit-article/${ar.id}`}
              style={{
                padding: "5px 10px",
                backgroundColor: "#007BFF",
                color: "white",
                textDecoration: "none",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "bold",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllArticles;
