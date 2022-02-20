const initialState = {
  tableData: [],
};

function womenReducer(state = initialState, action) {
  switch (action.type) {
    case "TABLE_DATA_FETCHED":
      return { data: action.payload };
    case "TABLE_DATA_FAILED":
      return { data: [action.err] };
    default:
      return initialState;
  }
}

export default womenReducer;
