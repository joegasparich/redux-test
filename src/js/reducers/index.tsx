import { ADD_ARTICLE, Action } from "../actions/index";

import Article from "../types/Article";

export interface IRootState {
	articles: Article[];
}

const initialState: IRootState = {
	articles: []
};

function rootReducer(state: IRootState = initialState, action: Action): IRootState {
	if (action.type === ADD_ARTICLE) {
		return Object.assign({}, state, {
			articles: state.articles.concat(action.payload)
		});
	}

	return state;
}

export default rootReducer;
