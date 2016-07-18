import { PROMPT_TRACK, NO_MATCH } from '../actions';

export const responseStatus = (state = { error: false }, action) => {
  switch (action.type) {
    case PROMPT_TRACK:
      return {
        ...state,
        error: false,
      };
    case NO_MATCH:
      return {
        ...state,
        error: 'The is no match for this query',
      };
    default:
      return state;
  }
};
