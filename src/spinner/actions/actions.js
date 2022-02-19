export function backdropAction(message) {
  return async function (dispatch) {
    if (message === "success") {
      dispatch({ type: "CLICKED_ON_LOGIN", payload: true });
    } else {
      dispatch({ type: "FAILED", payload: false });
    }
  };
}
