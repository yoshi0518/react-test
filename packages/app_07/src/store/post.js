const postsReducer = (
  state = {
    posts: [
      { id: 1, title: 'Reduxについて' },
      {
        id: 2,
        title: 'ReduxのHooksについて',
      },
    ],
  },
  action,
) => {
  switch (action.type) {
    case 'GET_POST_DATA':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
