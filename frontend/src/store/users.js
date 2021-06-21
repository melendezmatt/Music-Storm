const SET_USERS = 'users/SET_USERS';

const setUsers = (users) => ({
    type:SET_USERS,
    users
})

export const getUsers = () => async(dispatch) => {
    const res = await fetch('/api/users');
    const users = await res.json()
    dispatch(setUsers(users))
}

const initialState = {user: null}

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
        default:
            return state
    }
}

export default usersReducer; 
