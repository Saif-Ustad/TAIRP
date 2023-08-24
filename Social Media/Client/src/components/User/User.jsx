import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { followUser, unfollowUser } from "../../Action/UserAction";

const User = ({ person }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useSelector((state) => state.authReducer.authData);
    const dispatch = useDispatch()

    const [following, setFollowing] = useState(
        person.followers.includes(user._id)
      );

    const handleFollow = () => {
        following
          ? dispatch(unfollowUser(person._id, user))
          : dispatch(followUser(person._id, user));
        setFollowing((prev) => !prev);
      };

    return (
        <div className="follower">
            <div className="follower-info">
                {/* <img src={
                    publicFolder + person.profilePicture
                        ? publicFolder + person.profilePicture
                        : publicFolder + "defaultProfile.png"
                } alt="f-img"></img> */}
                <img src={person.profilePicture? publicFolder + person.profilePicture: publicFolder + "defaultProfile.png"} alt="f-img"></img>

                <div className="name-info">
                    <span>{person.firstname} {person.lastname}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <div className="follow-btn"><button onClick={handleFollow}>{following ? "Unfollow" : "Follow"}</button></div>
        </div>
    );

}

export default User;