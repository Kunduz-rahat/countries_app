import axios from "axios";
import { ALL_COUNTRIES } from "../../config";
import {
  COUNTRIES_LIST_ERROR,
  COUNTRIES_LIST_REQUEST,
  COUNTRIES_LIST_SUCCESS,
} from "../../constants";

export const getCountries = () => {
  return (dispatch) => {
    dispatch({ type: COUNTRIES_LIST_REQUEST });
    axios(ALL_COUNTRIES)
      .then(({ data }) => {
        dispatch({ type: COUNTRIES_LIST_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({
          type: COUNTRIES_LIST_ERROR,
          payload: "Произошла ошибка при загрузке данных ...",
        });
      });
  };
};
