import "./FollowersCard.scss"

import React from "react";

import FollowersModel from "../../FollowersModel/FollowersModel";

import { useState, useEffect } from "react";
import User from "../../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../../API/UserRequests";

function FollowersCard({ location }) {

    const [modelOpen, setModelOpen] = useState(false);
    const [persons, setPersons] = useState([]);
    const { user } = useSelector((state) => state.authReducer.authData);

    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAllUser();
            setPersons(data);
            console.log(data);
        };
        fetchPersons();
    }, []);

    return (
        <div className="followersCard">
            <h3>People you may know</h3>
            <div className="followers-list">
                {persons.map((person, id) => {
                    if (person._id !== user._id) return <User person={person} key={id} />;
                })}
            </div>
            {!location ? (<h5 onClick={() => setModelOpen(true)}>Show More</h5>) : ("")}
            <FollowersModel modelOpen={modelOpen} setModelOpen={setModelOpen} />

        </div>
    );
}

export default FollowersCard;