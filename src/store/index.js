import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevtools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevtools(applyMiddleware(thunk))
);
