import "./ProfileSide.scss";

import SearchCard from "./SearchCard/SearchCard";
import ProfileCard from "./ProfileCard/ProfileCard";
import FollowersCard from "./FollowersCard/FollowersCard";

function ProfileSide() {
    return (
        <div className="profile-side">
            <SearchCard />
            <ProfileCard location="homePage"/>
            <FollowersCard />
        </div>
    );
}

export default ProfileSide;