const countReducer = (
  state = {
    count: 100,
  },
  action,
) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    case 'DECREASE_COUNT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default countReducer;
