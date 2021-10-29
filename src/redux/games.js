const ADD_LIST_OF_GAMES_TO_STORE = 'ADD_LIST_OF_GAMES_TO_STORE';

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const initialState = [];

const addListOfGamesToStore = (payload) => ({
  type: ADD_LIST_OF_GAMES_TO_STORE,
  payload,
});

const getListOfGames = () => (dispatch) => {
  fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': 'e156b9e8a9msh929781f94d1c322p1fb9ffjsn52d3478dea5f',
    },
  }).then((response) => response.json())
    .then((games) => {
      dispatch(addListOfGamesToStore(games));
    });
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST_OF_GAMES_TO_STORE: return action.payload;
    default: return state;
  }
};

export {
  gamesReducer as default,
  getListOfGames,
};
