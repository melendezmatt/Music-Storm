import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneTrack, getOneUser } from "../../store/users";

const SingleTrack = () => {
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
            <NavLink to={`/users/${id}`}>
                <p>{currArtist?.artistName}</p>
            </NavLink>
            <p>{currTrack?.albumTitle}</p>
            <p>{currTrack.title}</p>
            <img
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                src={currTrack?.albumImageUrl}
                alt='albumImage'/>
            <audio controls src={currTrack?.url} type="type/mpeg"/>
            {(loggedInUser?.id === currArtist?.id) ? <><button>Edit</button> <button>Delete Track</button></>: null}
        </div>
    )
}

export default SingleTrack;
