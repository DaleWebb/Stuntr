export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';

export const likeWorker = () => ({
  type: LIKE,
  payload: {}
});

export const dislikeWorker = () => ({
  type: DISLIKE,
  payload: {}
});
