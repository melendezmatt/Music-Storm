import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../store/users';
import UserSquare from '../UserSquare'
import './UsersContainer.css'

const UsersContainer = () => {
    const dispatch = useDispatch();
    const usersArray = useSelector((state) => {
        return Object.values(state.allUsers)
    })

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div className='users-container'>
             {usersArray.map((user) => (
                <UserSquare user={user} key={user.id}/>
            ))}
        </div>
    )
}

export default UsersContainer;
