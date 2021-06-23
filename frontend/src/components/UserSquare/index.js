import { NavLink } from 'react-router-dom';
import './UserSquare.css';

const UserSquare = ({ user }) => {
    console.log(user)
    return (
        <div className='user-square'>
            <div className='user-info'>
                <div>
                    <img
                        style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }}
                        src={user.profileImageUrl ?
                            user.profileImageUrl :
                            "https://smhlancers.org/wp-content/uploads/2016/06/profile-placeholder-300x300.png" }
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

export default UserSquare;
