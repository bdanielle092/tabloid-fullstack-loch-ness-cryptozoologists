import React, { useContext, useState } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    const getAllPosts = () =>
        getToken().then((token) =>
            fetch("/api/post", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPosts));


    const addPost = (post) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    const getPost = (id) => {
        return fetch(`/api/post/${id}`).then((res) => res.json());
    };

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, getPost }}>
            {props.children}
        </PostContext.Provider>
    );
};