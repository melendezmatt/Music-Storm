import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { editOneTrack, getOneTrack, getOneUser } from "../../store/users";
import './UploadTrack.css'

// if (!loggedInUser){
//     history.push('/login')
// }

// handleSubmit

// handleClick


//after uploading it pushes you to the users Page where you can see the upload



const UploadTrack = () => {
    const { id } = useParams()
    const loggedInUser = useSelector((state) => state.session.user)
    const currArtist = useSelector((state) => {
        return state.users[id]
    })

    const [title, setTitle] = useState('')
    const [albumTitle, setAlbumTitle] = useState('')
    const [albumImageUrl, setAlbumImageUrl] = useState('')
    const [url, setUrl] = useState('')

    const updateTitle= (e) => setTitle(e.target.value);
    const updateAlbumTitle = (e) => setAlbumTitle(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          albumTitle,
          title,
          albumImageUrl,
          url,
        };

        await dispatch(createTrack(payload))
        history.push(`/users/${id}`)
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setAlbumImageUrl(file);
      };

    const updateFile2 = (e) => {
    const file = e.target.files[0];
    if (file) setUrl(file);
    };

    return (
        <div>
        <h1> Upload your tracks here!</h1>
        <form
        style={{ display: "flex", flexFlow: "column" }}
        onSubmit={handleSubmit}>
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
            onChange={updateFile}
            />
            <label>Song</label>
            <input
            type="text"
            placeholder="Song"
            value={url}
            onChange={updateFile2}
            />
            <button type='submit'> Submit </button>
            <NavLink to={`/users/${id}`}>
                <button type="button">Cancel</button>
            </NavLink>

            </form>
        </div>
    )
}

export default UploadTrack;
