import axios from 'axios';

const NOTES = 'NOTES';
const ADD_NOTE = 'ADD_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

// REDUX ACTIONS

export const getNotes = (cb) => {
  return (dispatch) => {
    axios.get('/api/notes')
      .then( res => dispatch({ type: NOTES, notes: res.data }) )
      .then(cb)
  }
}

export const addNote = (note) => {
  return (dispatch) => {
    axios.post('/api/notes', { note } )
     .then( res => dispatch({ type: ADD_NOTE, note: res.data }) )
  }
}

export const updateNote = (note) => {
  return (dispatch) => {
    axios.put(`/api/notes/${note.id}`, { note } )
      .then( res => dispatch({ type: UPDATE_NOTE, note: res.data }) )
  }
}

export const deleteNote = (id) => {
  return (dispatch) => {
    axios.delete(`/api/notes/${id}`)
      .then( () => dispatch({ type: DELETE_NOTE, id }) )
  }
}

// REDUX REDUCER

export default (state = [], action ) => {
  switch(action.type) {
    case NOTES:
      return action.notes
    case ADD_NOTE:
      return [action.note, ...state]
    case UPDATE_NOTE:
      return state.map( a => {
        if (a.id === action.note.id)
          return action.note
         return a
      })
    case DELETE_NOTE:
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  } 
}
