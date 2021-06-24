import { csrfFetch } from './csrf'

const SET_USERS = 'users/SET_USERS';
const GET_USER = 'users/GET_USER';
const GET_TRACKS = 'users/GET_TRACKS'

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
      debugger
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
            debugger
            return {
                ...state,
                [action.user.id] : action.user
            };
        default:
            return state
    }
}

export default usersReducer;
