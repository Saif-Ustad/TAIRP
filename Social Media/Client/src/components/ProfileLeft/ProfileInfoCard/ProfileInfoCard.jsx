import "./ProfileInfoCard.scss";

import { FaEdit } from "react-icons/fa";
import ProfileEdit from "../../ProfileEdit/ProfileEdit";

import { useState , useEffect} from "react";
import * as UserApi from "../../../API/UserRequests.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { logout } from "../../../Action/AuthActions";
 
function ProfileInfoCard() {
    
    const dispatch = useDispatch()
    const params = useParams();
    const profileUserId = params.id;

    const [profileUser, setProfileUser] = useState({});
    const { user } = useSelector((state) => state.authReducer.authData);
    const [modelOpen, setModelOpen] = useState(false);

    useEffect(() => {
        const fetchProfileUser = async () => {
          if (profileUserId === user._id) {
            
            setProfileUser(user);
          } else {
            console.log("fetching")
            const profileUser = await UserApi.getUser(profileUserId);
            setProfileUser(profileUser);
            console.log(profileUser)
          }
        };
        fetchProfileUser();
      }, [user]);

    const handleLogOut = ()=> {
        dispatch(logout())
    }
    

    return (
        <div className="ProfileInfoCard">
            <div className="InfoHead">
                <h4>Profile Info</h4>
                <FaEdit onClick={() => setModelOpen(true)}/>
                {user._id === profileUserId ? <ProfileEdit modelOpen={modelOpen} setModelOpen={setModelOpen} data = {user}/> :""}
            </div>
            <div className="infoDetails">
                <div className="info">
                    <span><b>Status </b></span>
                    <span>{profileUser.relationship}</span>
                </div>
                <div className="info">
                    <span><b>Live in </b></span>
                    <span>{profileUser.livesIn}</span>
                </div>
                <div className="info">
                    <span><b>Work at </b></span>
                    <span>{profileUser.worksAt}</span>
                </div>
                
            </div>

            <div className="logout-btn">
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    )
}

export default ProfileInfoCard;