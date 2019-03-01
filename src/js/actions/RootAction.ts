import { ActionType } from "typesafe-actions";
import * as articles from "../actions/ArticleAction";

export type ArticlesAction = ActionType<typeof articles>;

export type RootAction = ArticlesAction;
