import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App.jsx";

import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;

render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById("root")
);
