import _ from 'lodash';

export default (state = {}, action) => {

  switch(action.type){
    case 'GET_POSTS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'EDIT_POST':
      return { ...state, [action.payload.id]: action.payload };
    case 'ADD_POST':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_POST':
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
