import {
  LIKE,
  DISLIKE
} from '../actions';

const workerPhoto = require('../components/Deck/person.jpg');

const initialState = {
  cardIndex: 0,
  workers: [
    {
      name: 'Pete Mitchell',
      image: workerPhoto
    },
    {
      name: 'Luke Mann ',
      image: workerPhoto
    },
    {
      name: 'Jimmy Wise',
      image: workerPhoto
    },
    {
      name: 'Kyle Kaye',
      image: workerPhoto
    },
    {
      name: 'Liam Alexander',
      image: workerPhoto
    }
  ],
  likedWorkers: []
};

function likeWorker(state, action) {
  let { workers, likedWorkers, cardIndex } = state;
  const worker = workers[cardIndex];

  likedWorkers.push(worker);
  cardIndex++;

  return { ...state, likedWorkers, cardIndex };
}

function dislikeWorker(state, action) {
  let { cardIndex } = state;

  cardIndex++;

  return { ...state, cardIndex };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return likeWorker(state, action);
    case DISLIKE:
      return dislikeWorker(state, action);
    default:
      return state;
  }
};
