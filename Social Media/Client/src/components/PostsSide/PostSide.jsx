import "./PostSide.scss";


import PostShare from "./PostShare/PostShare";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTimelinePosts } from "../../Action/PostsAction";
import { useParams } from "react-router-dom";

import Post from "./Post/Post";

function PostSide() {
    const params = useParams()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer.authData.user);
    let { posts, uploading } = useSelector((state) => state.postReducer);


    useEffect(() => {
        dispatch(getTimelinePosts(user._id))
    }, [dispatch, user._id])

    if (!posts) return 'No Posts';
    if (params.id) posts = posts.filter((post) => post.userId === params.id)

    return (
        <div className="PostSide">
            <PostShare />
            {/* {posts?.map((post, id) => {
                return (
                    <Post post={post} key={id} />
                )

            })} */}
            {uploading
                ? "Fetching posts...."
                : posts.map((post, id) => {
                    return <Post post={post} key={id} />;
                })}

        </div>
    );
}

export default PostSide;