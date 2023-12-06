import { createStore } from "redux";
import { rootReducer } from "./reducers";

// create store with reducers
const store = createStore(rootReducer);

export default store;
