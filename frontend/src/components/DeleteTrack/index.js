import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneTrack, getOneUser } from "../../store/users";


const DeleteTrack = () => {
    const dispatch = useDispatch()
    const { id, trackId} = useParams()
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

    return (
        <div>
            <p>inside delete track</p>
            <p>{currTrack?.albumTitle}</p>
            <p>{currTrack?.title}</p>
        </div>
    )
}

export default DeleteTrack;
