import axios from "axios";
import { fetchData } from "../../womenTop/actions/actions";
import { backdropAction } from "../../spinner/actions/actions";
const baseURL = "https://rainy-star.surge.sh/products.json";

export function SignIn(args) {
  const { email, password } = { ...args };
  return async function (dispatch) {
    dispatch(backdropAction("success"));
    try {
      axios.get(baseURL).then(function (response) {
        if (response.data) {
          dispatch({ type: "FETCHED", payload: "login success" });
        }
      });
    } catch (err) {
      dispatch({ type: "FAILED", error: "login fail" });
    }
  };
}
