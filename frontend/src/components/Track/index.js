import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllUserTracks } from '../../store/users';
import './Track.css'


const Track = () => {
    const { id } = useParams()
    const loggedInUser = useSelector((state) => state.session.user)
    const dispatch = useDispatch();

    const currArtist = useSelector((state) => {
        return state.users[id]
    })

    const currTracks = useSelector((state) => {
        return state.users.tracks
    })

    useEffect(() => {
        dispatch(getAllUserTracks(id))
    }, [dispatch, id])

    return (
        <div>
            {currTracks?.map(track => (
                <div>
                    <p>{currArtist?.artistName}</p>
                    <p>{track.title}</p>
                    <p>{track.albumTitle}</p>
                    <img
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    src={track.albumImageUrl}
                    alt='albumImage'/>
                    <audio controls src={track.url} type="type/mpeg"/>
                    { (loggedInUser?.id === currArtist?.id) ? <><button>Edit</button> <button>Delete Track</button></>: null}
                </div>
            ))}
        </div>
    )
}



export default Track;
