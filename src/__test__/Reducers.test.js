import gamesReducer from '../redux/games';
import detailsReducer from '../redux/details';

describe('Games Reducer Should work properly', () => {
  it('Default state', () => {
    const action = {
      type: 'NONE',
    };
    const result = gamesReducer([], action);
    expect(result).toEqual([]);
  });
  it('Add games to store', () => {
    const payload = [
      {
        id: '111',
        title: 'Dauntless',
        release_date: '2019-05-21',
        developer: 'Phoenix Labs, Iron Galaxy',
        publisher: 'Phoenix Labs',
      },
      {
        id: '111023',
        title: 'World of Tanks',
        release_date: '2011-04-12',
        developer: 'Wargaming',
        publisher: 'Wargaming',
      },
    ];
    const action = {
      type: 'ADD_LIST_OF_GAMES_TO_STORE',
      payload,
    };
    const result = gamesReducer([], action);
    expect(result).toEqual(payload);
  });
});

describe('Details Reducer Should work properly', () => {
  it('Default state', () => {
    const action = {
      type: 'NONE',
    };
    const result = detailsReducer([], action);
    expect(result).toEqual([]);
  });
  it('Add details to store', () => {
    const payload = {
      id: 452,
      title: 'Call Of Duty: Warzone',
      thumbnail: 'https://www.freetogame.com/g/452/thumbnail.jpg',
      description: 'Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare. Warzone features two modes — the general 150-player battle royle, and “Plunder”. The latter mode is described as a “race to deposit the most Cash”. In both modes players can both earn and loot cash to be used when purchasing in-match equipment, field upgrades, and more. Both cash and XP are earned in a variety of ways, including completing contracts. An interesting feature of the game is one that allows players who have been killed in a match to rejoin it by winning a 1v1 match against other felled players in the Gulag. Of course, being a battle royale, the game does offer a battle pass. The pass offers players new weapons, playable characters, Call of Duty points, blueprints, and more. Players can also earn plenty of new items by completing objectives offered with the pass.',
      game_url: 'https://www.freetogame.com/open/call-of-duty-warzone',
      genre: 'Shooter',
      publisher: 'Activision',
      developer: 'Infinity Ward',
      release_date: '2020-03-10',
    };
    const action = {
      type: 'ADD_DETAILS_OF_A_GAME_TO_STORE',
      payload,
    };
    const result = detailsReducer([], action);
    expect(result).toEqual(payload);
  });
});
