import * as React from "react";
import { connect } from "react-redux";

import Article from "../types/Article";
import { RootState } from "../reducers/RootReducer";

type Props = {
	articles: Article[];
};

class List extends React.Component<Props, {}> {
	render(): JSX.Element {
		const articleList: JSX.Element[] = this.props.articles.map(article => <li key={article.id}>{article.title}</li>);

		return <ul>{articleList}</ul>;
	}
}

const mapStateToProps = (state: RootState): Props => {
	return { articles: state.articles };
};

export default connect(
	mapStateToProps,
	null
)(List);
