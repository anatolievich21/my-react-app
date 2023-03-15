import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://icon-library.com/images/user-icon-jpg/user-icon-jpg-12.jpg" alt=""/>
            post
            <div>
                <span>like</span>
            </div>
        </div>
    )

}

export default Post;