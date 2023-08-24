import "./Profile.scss";

import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCenter from "../../components/ProfileCenter/ProfileCenter";
import SponsorSide from "../../components/SponsorSide/SponsorSide";

function Profile() {
    return (
        <div className="profile">
            <div><ProfileLeft /></div>
            <div><ProfileCenter /></div>
            <div><SponsorSide /></div>

        </div>
    )
}
export default Profile;