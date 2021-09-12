import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../store/users';
import UserSquare from '../UserSquare'
import './UsersContainer.css'

const UsersContainer = () => {
    const dispatch = useDispatch();
    const usersArray = useSelector((state) => {
        return Object.values(state.users)
    })

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div>
        <h1> Featured Artists </h1>
            <div className='users-container'>
                {usersArray.map((user) => (
                    <div className='user-square'>
                        <UserSquare user={user} key={user.id}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsersContainer;
