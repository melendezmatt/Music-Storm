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

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers, getOneUser } from '../../store/users';
import './UserProfile.css'

const UserProfile = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false)
    const currArtist= useSelector((state) => {
        return state.users[id]
    })

    useEffect(() => {
        dispatch(getOneUser(id))
        setShowEditForm(false)
    }, [dispatch])


    if (showEditForm) {
        content = (
            <UpdateProfile user={user} hideForm={() => setShowEditForm(false)}/>
        )
    } else {
        content = (
            <h3>EDIT FORM CLOSED!!!! where track component would be???</h3>
        )
    }
    return (
        <>
            <div>
                <h1> {currArtist?.artistName}</h1>
                <h2> {currArtist?.bio} </h2>
                <img
                    style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }}
                    src={`/${currArtist?.profileImageUrl}`}
                    alt='profileImage'>
                </img>
            </div>
            <div>
                {content}
            </div>
        </>
    )
}

export default UserProfile;
