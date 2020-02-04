import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";



export default (state={}, action)=>{
    switch(action.type){
        case FETCH_STREAMS: // get all streams
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM: // Get stream
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM: // Create stream
            return {...state, [action.payload.id]:action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case EDIT_STREAM: // Edit stream
            return {...state, [action.payload.id]:action.payload};
        default:
            return state;
    }
};