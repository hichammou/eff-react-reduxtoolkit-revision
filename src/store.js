import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from "./reducers/articleReducer";

export const store = configureStore({
  reducer: {
    articles: ArticleReducer,
  },
});
