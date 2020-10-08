import React from "react";
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <p>
                    <strong>{post.title}</strong>
                </p>
                <p>{post.caption}</p>
                <Button href="http://localhost:3000/comments">View Comments</Button>
                <Link to={`/posts/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
            </CardBody>
        </Card>
    );
};

export default Post;