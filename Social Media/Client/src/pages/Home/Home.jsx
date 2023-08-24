import "./Home.scss";

import PostSide from "../../components/PostsSide/PostSide.jsx";
import ProfileSide from "../../components/ProfileSide/ProfileSide.jsx";
import SponsorSide from "../../components/SponsorSide/SponsorSide.jsx";

function Home() {
    return (
        <div className="home">
            <div className="left"><ProfileSide /></div>
            <div className="center"><PostSide /></div>
            <div className="right"><SponsorSide /></div> 
        </div>
    );
}

export default Home;