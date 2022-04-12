
export const initialState = {
  list: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '@@users/ADD_USER_LIST': {
      const newList = state.list;
      newList.push(action.payload);
      return {...state, list:newList}
    }
    default: {
      return state
    }
  }
};

export {reducer as usersReducers}