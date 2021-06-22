import { NavLink } from 'react-router-dom';
import './UserList.css';

const IndividualUser = ({ user }) => {
    return (
        <div >
            <div >
                <div>
                    <img
                        style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }}
                        src={user?.profileImageUrl}
                        alt="profile"
                    />
                </div>
                <div className='profileLink'>
                    <NavLink to={`/users/${user.id}`}>
                        {user.username}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default UserList;
