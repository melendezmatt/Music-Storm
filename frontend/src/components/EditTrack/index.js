import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { editOneTrack, getOneTrack, getOneUser } from "../../store/users";

const EditTrack = () => {
    const dispatch = useDispatch()
    const { id, trackId } = useParams()
    const loggedInUser = useSelector((state) => state.session.user)
    const currArtist = useSelector((state) => {
        return state.users[id]
    })
    const currTrack = useSelector((state) => {
        return state.users.track
    })

    const [title, setTitle] = useState(currTrack?.title)
    const [albumTitle, setAlbumTitle] = useState(currTrack?.albumTitle)
    const [albumImageUrl, setAlbumImageUrl] = useState(currTrack?.albumImageUrl)
    const [url, setUrl] = useState(currTrack?.url)

    const updateTitle= (e) => setTitle(e.target.value);
    const updateAlbumTitle = (e) => setAlbumTitle(e.target.value);
    const updateAlbumImageUrl = (e) => setAlbumImageUrl(e.target.value);
    const updateUrl = (e) => setUrl(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          ...currTrack,
          albumTitle,
          title,
          albumImageUrl,
          url,
        };

        const updatedTrack = await dispatch(editOneTrack(payload));
        if (updatedTrack) {
            console.log('it updated!!')
        }
    };


    useEffect(() => {
        dispatch(getOneUser(id))
        dispatch(getOneTrack(id, trackId))
    }, [dispatch, id, trackId])

    return (
        <div>
            <p>inside edit track</p>
            <p>{currTrack?.albumTitle}</p>
            <p>{currTrack?.title}</p>
            <p>{currTrack?.albumImageUrl}</p>
            <p>{currTrack?.url}</p>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                type="text"
                placeholder="Song Title"
                value={title}
                onChange={updateTitle}
                />
                <label>Album Title</label>
                <input
                type="text"
                placeholder="Album Title"
                value={albumTitle}
                onChange={updateAlbumTitle}
                />
                <label>Album Cover</label>
                <input
                type="text"
                placeholder="Album Cover"
                value={albumImageUrl}
                onChange={updateAlbumImageUrl}
                />
                <label>Song</label>
                <input
                type="text"
                placeholder="Song"
                value={url}
                onChange={updateUrl}
                />
                <button type='submit'> Submit </button>
            </form>
        </div>
    )
}

export default EditTrack;
