const initialState = {
  data: [],
};

function womenReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED":
      return { data: action.payload };
    case "FAILED":
      return { data: [action.err] };
    default:
      return initialState;
  }
}

export default womenReducer;
