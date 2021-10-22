const ADD_DETAILS_OF_A_GAME_TO_STORE = 'ADD_DETAILS_OF_A_GAME_TO_STORE';
const CLEAR_DETAILS = 'CLEAR_DETAILS';
const UNCLEAR_DETAILS = 'UNCLEAR_DETAILS';

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game';
const initialState = {
  empty: true,
};

const addDetailsOfAGameToStore = (payload) => ({
  type: ADD_DETAILS_OF_A_GAME_TO_STORE,
  payload,
});

const clearDetails = () => ({
  type: CLEAR_DETAILS,
});

const unclearDetails = () => ({
  type: UNCLEAR_DETAILS,
});

const getDetailsOfAGame = (id) => (dispatch) => {
  fetch(`${url}?id=${id}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': 'e156b9e8a9msh929781f94d1c322p1fb9ffjsn52d3478dea5f',
    },
  }).then((response) => response.json())
    .then((game) => {
      dispatch(addDetailsOfAGameToStore(game));
    });
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DETAILS_OF_A_GAME_TO_STORE: return action.payload;
    case CLEAR_DETAILS: return initialState;
    case UNCLEAR_DETAILS: return { empty: false };
    default: return state;
  }
};

export {
  detailsReducer as default,
  getDetailsOfAGame,
  clearDetails,
  unclearDetails,
};
