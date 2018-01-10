import { handleAction } from 'redux-actions';
import { citeRequest } from '../actions/search';
export const search = handleAction(
  cityRequest,
  (state, action) => ({ query: action.payload }),
  { query: '' }
);
