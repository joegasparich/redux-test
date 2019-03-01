import { action } from "typesafe-actions";
import Article from "../types/Article";
import * as cuid from "cuid";

export enum ActionTypes {
	ADD_ARTICLE = "ADD_ARTICLE"
}

export const addArticle = (title: string) =>
	action(ActionTypes.ADD_ARTICLE, {
		id: cuid(),
		title: title
	} as Article);
