import "./ProfileLeft.scss";

import ProfileInfoCard from "./ProfileInfoCard/ProfileInfoCard";
import SearchCard from "../ProfileSide/SearchCard/SearchCard";
import FollowersCard from "../ProfileSide/FollowersCard/FollowersCard";

function ProfileLeft() {
    return (
        <div className="profileLeft">
            <SearchCard />
            <ProfileInfoCard />
            <FollowersCard />
        </div>
       
    )
}

export default ProfileLeft;