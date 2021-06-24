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

    // const currTracks = useSelector((state) => {
    //     return state.tracks
    // })
    
    useEffect(() => {
        dispatch(getAllUserTracks(id))
    }, [dispatch, id])

    return (
        <p>This is the track component</p>
    )
}



export default Track;
