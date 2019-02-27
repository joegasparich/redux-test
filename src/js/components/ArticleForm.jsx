import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions";

class ArticleForm extends Component {
	constructor(props) {
		super(props);

		//Initial State
		this.state = {
			title: ""
		};

		//Binds
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//Handles input change
	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	//Handles form submission
	handleSubmit(event) {
		event.preventDefault();

		this.props.addArticle({
			id: uuidv1(),
			title: this.state.title
		});
		this.setState({ title: "" });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					value={this.state.title}
					onChange={this.handleChange}
				/>
				<button type="submit">Add</button>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addArticle: article => dispatch(addArticle(article))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(ArticleForm);
