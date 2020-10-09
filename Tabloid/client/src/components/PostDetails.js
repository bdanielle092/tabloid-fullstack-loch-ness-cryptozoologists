import React, { useEffect, useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";


const PostDetails = () => {
    const [post, setPost] = useState({});
    const { getPost, singlePost } = useContext(PostContext);
    const { id } = useParams();

    console.log(id, "id")

    useEffect(() => {
        getPost(id).then(setPost);
    }, []);

    if (!post) {
        return null;
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">

                    <Post key={post.id} post={post} />
                    <p>blue</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;