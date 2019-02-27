import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";

import { logger, crashReporter } from "../middleware/index";

const store = createStore(rootReducer, applyMiddleware(logger, crashReporter));

export default store;
