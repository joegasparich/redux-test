import { Reducer } from "redux";

import Article from "../types/Article";
import { ActionTypes } from "../actions/ArticleAction";

export type RootState = {
	articles: Article[];
};

const initialState: RootState = {
	articles: []
};

const rootReducer: Reducer<RootState> = (state: RootState = initialState, action) => {
	switch (action.type) {
		case ActionTypes.ADD_ARTICLE:
			return Object.assign({}, state, {
				articles: state.articles.concat(action.payload)
			});
		default:
			return state;
	}
};

export default rootReducer;
