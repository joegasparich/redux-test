import * as React from "react";
import { hot } from "react-hot-loader";

import List from "./List";
import ArticleForm from "./ArticleForm";

class App extends React.Component {
	render(): JSX.Element {
		return (
			<div className="App">
				<h2>Articles</h2>
				<List />
				<ArticleForm />
			</div>
		);
	}
}

export default hot(module)(App);
