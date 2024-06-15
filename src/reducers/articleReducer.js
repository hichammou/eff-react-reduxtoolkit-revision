import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
};

export const fetchAllArticles = createAsyncThunk(
  "articles/fetchArticles",
  async function () {
    const { data } = await axios.get("http://localhost:3000/articles");
    return data;
  }
);

export const editArticle = createAsyncThunk(
  "articles/editArticle",
  async function (newArticle) {
    const { data } = await axios.put(
      `http://localhost:3000/articles/${newArticle.id}`,
      newArticle
    );

    return data;
  }
);
export const deleteArticle = createAsyncThunk(
  "articles/deleteArticle",
  async function (id) {
    const { data } = await axios.delete(`http://localhost:3000/articles/${id}`);

    return data;
  }
);

export const addArticle = createAsyncThunk(
  "articles/addArticle",
  async function (newArticle) {
    const { data } = await axios.post(
      `http://localhost:3000/articles/`,
      newArticle
    );

    return data;
  }
);

const ArticleSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchAllArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
      })
      .addCase(editArticle.fulfilled, (state, action) => {
        state.articles = state.articles.map((ar) =>
          ar.id === action.payload.id ? action.payload : ar
        );
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.articles = state.articles.filter(
          (ar) => ar.id !== action.payload.id
        );
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        state.articles.push(action.payload);
      });
  },
});

export default ArticleSlice.reducer;

export const getArticle = (id) => {
  return (state) =>
    state.articles.articles.find((article) => article.id === id);
};
export const getAllArticles = (state) => state.articles.articles;
