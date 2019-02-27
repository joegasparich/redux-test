import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
	render() {
		const articleList = this.props.articles.map(article => (
			<li key={article.id}>{article.title}</li>
		));

		return <ul>{articleList}</ul>;
	}
}

const mapStateToProps = state => {
	return { articles: state.articles };
};

export default connect(mapStateToProps)(List);
