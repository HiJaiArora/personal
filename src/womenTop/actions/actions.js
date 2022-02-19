import axios from "axios";
import { backdropAction } from "../../spinner/actions/actions";
const baseURL = "https://rainy-star.surge.sh/products.json";

export function fetchData() {
  return async function (dispatch) {
    dispatch(backdropAction("success"));
    try {
      axios.get(baseURL).then(function (response) {
        dispatch({ type: "API_FETCHED", payload: response.data });
      });
    } catch (err) {
      dispatch({ type: "FAILED", error: err });
    }
  };
}
