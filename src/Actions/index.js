import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHNOTE = 'FETCHNOTE';
export const NOTEFETCHED = 'NOTEFETCHED';
export const ERROR = 'ERROR';
export const ADDED = 'ADDED';
export const DELETED = 'DELETED';
export const UPDATED = 'UPDATED';

export const getNotes = () => {
  return dispatch => {
    dispatch({type: FETCHING})
      axios.get('https://backend-week-app.herokuapp.com/notes')
        .then(response => {
          dispatch({type: FETCHED, notes: response.data})
        })
        .catch(error => {
          dispatch({type: ERROR, error: error})
        })
    }
}

export const getNote = (id) => {
  console.log('ID', id);
  return dispatch => {
    dispatch({type: FETCHNOTE})
      axios.get(`https://backend-week-app.herokuapp.com/notes/${id}`)
        .then(response => {
          dispatch({type: NOTEFETCHED, note: response.data})
        })
        .catch(error => {
          dispatch({type: ERROR, error: error})
        })
    }
}

export const addNote = (newNote) => {
  return dispatch => {
    // dispatchEvent({type: ADDED})
      axios.post('https://backend-week-app.herokuapp.com/notes/', newNote)
      .then(response => {
        dispatch({type: ADDED, notes: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
      })
  }
}

export const deleteNote = (id) => {
  console.log('DELETE NOTE', id);
  return dispatch => {
      axios.delete(`https://backend-week-app.herokuapp.com/notes/${id}`)
      .then(response => {
        dispatch({type: DELETED, notes: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
      })
  }
}

export const editNote = (id, noteInfo) => {
  return dispatch => {
      axios.put(`https://backend-week-app.herokuapp.com/notes/${id}`, noteInfo)
      .then(response => {
        dispatch({type: UPDATED, notes: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
      })
  }
}