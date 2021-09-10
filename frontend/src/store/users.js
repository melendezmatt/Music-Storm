import { csrfFetch } from './csrf'

const SET_USERS = 'users/SET_USERS';
const GET_USER = 'users/GET_USER';
const GET_TRACKS = 'users/GET_TRACKS'
const GET_SINGLE = 'users/GET_SINGLE'
const REMOVE_SINGLE = 'users/REMOVE_SINGLE'

const setUsers = (users) => ({
    type:SET_USERS,
    users
})

const setOneUser = (user) => ({
    type: GET_USER,
    user,
});

const setTracks = (tracks) => ({
    type: GET_TRACKS,
    tracks
})

const setOneTrack = (track) => ({
    type: GET_SINGLE,
    track,
});

const deleteOneTrack = (track) => ({
    type: REMOVE_SINGLE,
    track,
})


export const getUsers = () => async(dispatch) => {
    const res = await csrfFetch('/api/users');

    if (res.ok) {
        const users = await res.json()
        dispatch(setUsers(users))
    }
}

export const getOneUser = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${id}`);

    if (res.ok) {
      const user = await res.json();
      dispatch(setOneUser(user));
    }
};

export const editUser = (payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });

    if (res.ok) {
      const user = await res.json();
      dispatch(setOneUser(user));
      return user
    }
};

export const getAllUserTracks = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${id}/tracks`)
    if (res.ok) {
        const userTracks = await res.json()
        dispatch(setTracks(userTracks))
        return userTracks
    }
}

export const getOneTrack = (id, trackId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${id}/tracks/${trackId}`);

    if (res.ok) {
      const track = await res.json();
      dispatch(setOneTrack(track));
      return track
    }
};

export const editOneTrack = (id, payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${id}/tracks/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });

    if (res.ok) {
      const track = await res.json();
      dispatch(setOneTrack(track));
      return track
    }
};

export const removeOneTrack = (id, trackId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${id}/tracks/${trackId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        const track = await res.json()
        dispatch(deleteOneTrack(track))
        return track;
    }
}

const initialState = {}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            const allUsers = {};
            action.users.forEach((user) => {
                allUsers[user.id] = user;
            }
            );
            return {
                ...state,
                ...allUsers
            };
        case GET_USER:
            return {
                ...state,
                [action.user.id] : action.user
            };
        case GET_TRACKS:
            return {
                ...state,
                tracks: action.tracks
            }
        case GET_SINGLE:
            return {
                ...state,
                track: action.track
            }
        case REMOVE_SINGLE:
            const newState = { ...state };
            delete newState[action.track];
            return newState;
        default:
            return state
    }
}

export default usersReducer;
