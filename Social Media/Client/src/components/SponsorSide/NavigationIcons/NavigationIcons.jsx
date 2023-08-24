import "./NavigationIcons.scss";

import HomeIcon from "../../../images/icons/home.svg";
import SettingIcon from "../../../images/icons/settings.svg";
import SnapIcon from "../../../images/icons/snap.svg";
import MessageIcon from "../../../images/icons/message.svg";
import { Link } from "react-router-dom";

function NavigationIcons() {
    return (
        <div className="navigation-btns">
            <Link to="../home">
                <img src={HomeIcon} alt="nav-icon" />
            </Link>
            
            <img src={SettingIcon} alt="nav-icon" />
            <img src={SnapIcon} alt="nav-icon" />
            <img src={MessageIcon} alt="nav-icon" />
        </div>
    )
}

export default NavigationIcons;