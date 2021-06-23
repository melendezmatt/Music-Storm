// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { getUsers } from '../../store/users';
// import './UserProfile.css'

// const UserProfile = () => {
//     // const id = useParams()
//     const dispatch = useDispatch();
//     const usersArray = useSelector((state) => {
//         return Object.values(state.users)
//     })

//     useEffect(() => {
//         dispatch(getUsers())
//     }, [dispatch])

//     return (
//         console.log(usersArray)
//     )
// }

// export default UserProfile;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers, getOneUser } from '../../store/users';
import './UserProfile.css'

const UserProfile = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const currArtist= useSelector((state) => {
        return state.users[id]
    })

    // const currArtist = usersArray.find(user => user.id === parseInt(id))

    // useEffect(() => {
    //     dispatch(getUsers())
    // }, [dispatch])

    useEffect(() => {
        dispatch(getOneUser(id))
    }, [dispatch])

    console.log(currArtist)
    return (
        <>
        <h1> {currArtist?.artistName}</h1>
        <h2> {currArtist?.bio} </h2>
        <div>
            <img
                style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }}
                src={`/${currArtist?.profileImageUrl}`}
                alt='profileImage'>
            </img>
        </div>

        </>
    )
}

export default UserProfile;
