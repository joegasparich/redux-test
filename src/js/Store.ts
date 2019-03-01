import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import rootReducer, { RootState } from "./reducers/RootReducer";

import logger from "./middleware/Logger";

const store: Store<RootState, AnyAction> = createStore(rootReducer, applyMiddleware(logger));

export default store;
