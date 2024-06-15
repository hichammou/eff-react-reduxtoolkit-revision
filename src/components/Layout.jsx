import { Link, Outlet } from "react-router-dom";

function Layout() {
  const style = {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    padding: "0 20px",
    gap: "20px",
  };
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <nav style={{ position: "sticky", top: 0, width: "100%" }}>
        <ul style={style}>
          <li>
            <Link to="all-articles">All Articles</Link>
          </li>
          <li>
            <Link to="create-article">Create Article</Link>
          </li>
        </ul>
      </nav>
      <section style={{ marginTop: "60px" }}>
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;
