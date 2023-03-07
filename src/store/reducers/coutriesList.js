import {
  COUNTRIES_LIST_ERROR,
  COUNTRIES_LIST_REQUEST,
  COUNTRIES_LIST_SUCCESS,
} from "../../constants";

const initialState = {
  countries: [],
  loading: false,
  error: "",
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_LIST_REQUEST:
      return { ...state, loading: true };
    case COUNTRIES_LIST_SUCCESS:
      return { ...state, countries: action.payload, loading: false };
    case COUNTRIES_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
