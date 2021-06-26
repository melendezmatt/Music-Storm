import { useParams, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneTrack, getOneUser, removeOneTrack } from "../../store/users";

const DeleteTrack = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id, trackId } = useParams()
    const loggedInUser = useSelector((state) => state.session.user)
    const currArtist = useSelector((state) => {
        return state.users[id]
    })

    const currTrack = useSelector((state) => {
        return state.users.track
    })

    useEffect(() => {
        dispatch(getOneUser(id))
        dispatch(getOneTrack(id, trackId))
    }, [dispatch, id, trackId])

    const deleteTrack =  async (e) => {
        e.preventDefault()
        await dispatch(removeOneTrack(id, trackId))
    }

    if (!currTrack) {
        history.push(`/users/${loggedInUser.id}`)
    }

    return (
        <div>
            <p>inside delete track</p>
            <p>{currTrack?.albumTitle}</p>
            <p>{currTrack?.title}</p>
            <p> Are you sure you want to delete {currTrack?.title}? This will be permanent.</p>
            <button type="button" onClick={deleteTrack}> Yes </button>
            <NavLink to={`/users/${id}/tracks/${trackId}`}>
                <button type="button" > Cancel </button>
            </NavLink>

        </div>
    )
}

export default DeleteTrack;
