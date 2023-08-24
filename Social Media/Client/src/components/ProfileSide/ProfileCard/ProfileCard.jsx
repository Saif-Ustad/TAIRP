import "./ProfileCard.scss";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProfileCard({location}) {
    const { user } = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state)=>state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="profileCard">
            <div className="profile-img">
                <img src={ user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jfif"}  alt="profile-background"/>
                <img src={ user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png" } alt="profile-img" />
            </div>
            <div className="profile-details">
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.worksAt? user.worksAt : 'Write about yourself'}</span>
            </div>
            <div className="followers-count">
                <hr />
                <div className="count-section">
                    <div className="count">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    <div className="vertical-row"></div>
                    <div className="count">
                        <span>{user.following.length}</span>
                        <span>Following</span>
                    </div>
                    <div className="vertical-row"></div>
                    { location === "profilePage" &&  <div className="count">
                            <span>{posts.filter((post)=>post.userId === user._id).length}</span>
                            <span>Post</span>
                        </div>
                    }
                </div>
                <hr />
            </div>
            {location !== "profilePage" && 
                <button>
                    <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        My Profile
                    </Link>
                </button>
            }
        </div>
    );
}

export default ProfileCard;