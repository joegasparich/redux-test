import * as React from "react";
import { connect } from "react-redux";

import Article from "../types/Article";
import { IRootState } from "../reducers/index";

interface IProps {
	articles: Article[];
}

class List extends React.Component<IProps, {}> {
	render(): JSX.Element {
		const articleList: JSX.Element[] = this.props.articles.map(article => (
			<li key={article.id}>{article.title}</li>
		));

		return <ul>{articleList}</ul>;
	}
}

const mapStateToProps = (state: IRootState): IProps => {
	return { articles: state.articles };
};

export default connect(mapStateToProps)(List);
