const initialState = {
  message: false,
};

function spinnerReducer(state = initialState, action) {
  switch (action.type) {
    case "CLICKED_ON_LOGIN":
      return { message: true };
    case "FAILED":
      return { message: false };
    default:
      return initialState;
  }
}

export default spinnerReducer;
