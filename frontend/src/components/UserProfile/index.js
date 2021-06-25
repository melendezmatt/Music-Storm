import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../../store/users';
import './UserProfile.css'
import UpdateProfile from '../UpdateProfile'
import Track from '../Track';

const UserProfile = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false)
    const loggedInUser = useSelector((state) => state.session.user)
    const currArtist= useSelector((state) => {
        return state.users[id]
    })

    useEffect(() => {
        dispatch(getOneUser(id))
        setShowEditForm(false)
    }, [dispatch, id])

    console.log(currArtist)
    let content = null;
    if (showEditForm && (loggedInUser?.id === currArtist?.id)) {
        content = (
            <UpdateProfile user={currArtist} hideForm={() => setShowEditForm(false)} />
        )
    } else {
        content = (
            <Track />
        )
    }


    return (
        <>
            <div>
                <h1> {currArtist?.artistName}</h1>
                <h2> {currArtist?.bio} </h2>
                <img
                    style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }}
                    src={currArtist?.profileImageUrl}
                    alt='profileImage'>
                </img>
                { (loggedInUser?.id === currArtist?.id) ? <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button> : null}
            </div>
            <div>
                {content}
            </div>
        </>
    )
}

export default UserProfile;
