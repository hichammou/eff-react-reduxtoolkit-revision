import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllArticles from "./components/AllArticles";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";
import SingleArticle from "./components/SingleArticle";
import Layout from "./components/Layout";
import { useEffect } from "react";
import { fetchAllArticles, getAllArticles } from "./reducers/articleReducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllArticles());
  }, []);
  const articles = useSelector(getAllArticles);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {articles.length > 0 ? (
            <>
              <Route path="/all-articles" element={<AllArticles />} />
              <Route path="/all-articles/:id" element={<SingleArticle />} />
              <Route path="/create-article" element={<CreateArticle />} />
              <Route path="/edit-article/:id" element={<EditArticle />} />
            </>
          ) : (
            "Loading ..."
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
