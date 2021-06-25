import { editUser } from '../../store/users';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const UpdateProfile = ({user, hideForm}) => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState(user.username)
    const [bio, setBio] = useState(user.bio)
    const [artistName, setArtistName] = useState(user.artistName)
    // const [photo, setPhoto] = useState(user.profileImageUrl)

    const updateUsername = (e) => setUsername(e.target.value);
    const updateBio = (e) => setBio(e.target.value);
    const updateArtistName = (e) => setArtistName(e.target.value);
    // const updatePhoto = (e) => setPhoto(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          ...user,
          username,
          bio,
          artistName,
        };

        const updatedArtist = await dispatch(editUser(payload));
        if (updatedArtist) {
            hideForm();
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
      };

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={updateUsername}
        />
        <label>Artist Name</label>
        <input
          type="text"
          placeholder="Artist Name"
          value={artistName}
          onChange={updateArtistName}
        />
        <label>Bio</label>
        <input
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={updateBio}
        />

        <button type="submit">Update Your profile</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>

        </>
    )
}



export default UpdateProfile
