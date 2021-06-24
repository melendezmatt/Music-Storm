import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../../store/users';
import './UserProfile.css'
import UpdateProfile from '../UpdateProfile'

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
    }, [dispatch, id])

    let content = null;

    //{&& (currArtist.id === state.user.id) } ??? how do I only make sure these buttons show up only for the logged in user
    if (showEditForm) {
        content = (
            <>
                <h3> EDIT FORM OPEN!!!!</h3>
                <UpdateProfile user={currArtist} hideForm={() => setShowEditForm(false)} />
            </>
        )
    } else {
        content = (
            <h3>EDIT FORM CLOSED!!!! where track component would be!!</h3>
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
                <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button>

            </div>
            <div>
                {content}
            </div>
        </>
    )
}

export default UserProfile;
