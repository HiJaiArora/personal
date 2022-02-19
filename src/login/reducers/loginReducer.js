const initialState = {
  loginData: [],
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED":
      return { loginData: action.payload };
    case "FAILED":
      return { loginData: [action.err] };
    default:
      return initialState;
  }
}

export default loginReducer;
