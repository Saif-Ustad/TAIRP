import "./SponsorSide.scss";

import NavigationIcons from "./NavigationIcons/NavigationIcons";
import SponsorCard from "./SponsorCard/SponsorCard";
import ShareBtn from "./ShareBtn/ShareBtn";

function SponsorSide() {
    return (
        <div className="sponsorSide">
            <NavigationIcons />
            <SponsorCard />
            <ShareBtn />
        </div>
    );
}

export default SponsorSide;