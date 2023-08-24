import "./ProfileCenter.scss";

import ProfileCard from "../ProfileSide/ProfileCard/ProfileCard";
import PostSide from "../PostsSide/PostSide";


function ProfileCenter() {
    return (
        <div className="profile-center">
            <ProfileCard location="profilePage" />
            <PostSide />
        </div>
    )
}

export default ProfileCenter;