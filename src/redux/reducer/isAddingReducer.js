const isAddingReducer = (state = false, action) => {
    if (action.type === "SHOW_ADD_WORD") return !state;
    return state;
  };

  export default isAddingReducer;