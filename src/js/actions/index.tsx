export const ADD_ARTICLE = "ADD_ARTICLE";

import Article from "../types/Article";

type AddArticle = { type: typeof ADD_ARTICLE; payload: Article };

export function addArticle(article: Article): AddArticle {
	return { type: ADD_ARTICLE, payload: article };
}

export type Action = AddArticle;
