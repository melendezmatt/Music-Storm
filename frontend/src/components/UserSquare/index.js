import { NavLink } from 'react-router-dom';
import './UserSquare.css';

const UserSquare = ({ user }) => {
    return (
        <div className='user-square'>
            <div className='user-info'>
                <div>
                    <img
                        style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }}
                        src={user?.profileImageUrl}
                        alt="artist-profile"
                    />
                </div>
                <div className='profileLink'>
                    <NavLink to={`/users/${user.id}`}>
                        {user.artistName}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default UserList;
