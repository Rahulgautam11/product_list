import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
const middleware = [thunk];

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default Store