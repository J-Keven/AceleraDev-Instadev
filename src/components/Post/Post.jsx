import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);
  const { imageUrl, comments } = postInfo;

  return (
    <article className="post" data-testid="post">
      <header className="post__header">
        <div className="user">
          <Link to="" className="user__thumb">
            <img src={userInfo.avatar} alt="" />
          </Link>

          <Link to="" className="user__name">
            {userInfo.username}
          </Link>

          <button onClick={() => setFollow(!follow)} className="post__context">
            {follow ? (
              <span className="follow-btn is-following">Seguindo</span>
            ) : (
              <span className="follow-btn">Seguir</span>
            )}
          </button>
        </div>
      </header>
      <figure className="post__figure">
        <img src={imageUrl} alt="" />
      </figure>

      {userInfo && (
        <nav className="post__controls">
          <button className="post__control" onClick={() => setLike(!like)}>
            {like ? (
              <i className="fas fa-heart" />
            ) : (
              <i className="far fa-heart" />
            )}
          </button>

          {userInfo && comments.length > 0 && (
            <div className="post__status">
              <div className="user">
                <span>
                  curtido por <Link to="/">{comments[0].name}</Link> e outra
                  {comments.length - 1 + like > 1 && "s"}{" "}
                  <Link to="/">
                    {comments.length - 1 + like} pessoa
                    {comments.length - 1 + like > 1 && "s"}.
                  </Link>
                </span>
              </div>
            </div>
          )}
        </nav>
      )}
    </article>
  );
};

export default Post;
