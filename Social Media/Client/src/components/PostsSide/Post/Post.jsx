import { FaHeart } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

import { likePost } from "../../../API/PostsRequests";
import { useSelector } from "react-redux";
import { useState } from "react";

const Post = ({post}) => {

    const { user } = useSelector((state) => state.authReducer.authData);
    const [liked, setLiked] = useState(post.likes.includes(user._id));
    const [likes, setLikes] = useState(post.likes.length)

    const handleLike = () => {
        likePost(post._id, user._id);
        setLiked((prev) => !prev);
        liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
      };

    return (
        <div className="post">
            <img src={post.image ? process.env.REACT_APP_PUBLIC_FOLDER + post.image : ""} alt="post-img" />
            <div className="post-icons">
                <FaHeart style={{ color: liked ? "#F74209" : "#000" }} onClick={handleLike} />
                <BiSolidMessageDetail />
                <FaShareAlt />
            </div>
            <h4>{likes} likes</h4>
            <h3>{post.desc}</h3>
        </div>
    )
}

export default Post;
