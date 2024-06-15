import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllArticles from "./components/AllArticles";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";
import SingleArticle from "./components/SingleArticle";
import Layout from "./components/Layout";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState(initialArticles);

  const addArticle = (title, body, id) => {
    setArticles((ar) => [...ar, { title, body, id }]);
  };

  const deleteArticle = (id) => {
    setArticles((arts) => arts.filter((ar) => ar.id != id));
  };

  const editArticle = (id, title, body) => {
    const article = articles.find((ar) => ar.id == id);
    article.body = body;
    article.title = title;
  };

  const getArticle = (id) => articles.find((ar) => ar.id == id);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/all-articles" element={<AllArticles />} />
          <Route
            path="/all-articles/:id"
            element={<SingleArticle getArticle={getArticle} />}
          />
          <Route
            path="/create-article"
            element={<CreateArticle createArticle={addArticle} />}
          />
          <Route
            path="/edit-article/:id"
            element={
              <EditArticle
                editArticle={editArticle}
                deleteArticle={deleteArticle}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const initialArticles = [
  {
    id: 1,
    title: "Article One",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Article Two",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Article Three",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
