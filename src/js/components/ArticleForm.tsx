import * as React from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/ArticleAction";

import { Dispatch } from "redux";
import { ArticlesAction } from "../actions/RootAction";

type Props = {
	addArticle: typeof addArticle;
};

type State = {
	title: string;
};

class ArticleForm extends React.Component<Props, State> {
	readonly state = {
		title: ""
	};

	//Handles input change
	handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
		this.setState({ title: event.currentTarget.value });
	};

	//Handles form submission
	handleSubmit = (event: React.FormEvent): void => {
		event.preventDefault();

		this.props.addArticle(this.state.title);

		this.setState({
			title: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="title">Title</label>
				<input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
				<button type="submit">Add</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch<ArticlesAction>) => {
	return {
		addArticle: article => dispatch(addArticle(article))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(ArticleForm);
