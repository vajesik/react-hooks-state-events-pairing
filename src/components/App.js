import video from "../data/video.js";
import React, { useState } from "react";
import Votes from "./Votes.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);
  const {
    id,
    title,
    embedUrl,
    views,
    createdAt,
    upvotes,
    downvotes,
    comments,
  } = video;
  const [upVotes, setUpVotes] = useState(upvotes);
  const [downVotes, setDownVotes] = useState(downvotes);
  const [isHidden, setIsHidden] = useState(false);

  function handleLikeClick() {
    setUpVotes(upVotes => (upVotes += 1));
  }
  function handleDislikeClick() {
    setDownVotes(downVotes => (downVotes += 1));
  }

  function onCommentClick() {
    setIsHidden(isHidden => !isHidden);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
      <Votes
        upVotes={upVotes}
        onLikeClick={handleLikeClick}
        downVotes={downVotes}
        onDislikeClick={handleDislikeClick}
      />
      <Comments
        comments={comments}
        isHidden={isHidden}
        onCommentClick={onCommentClick}
      />
    </div>
  );
}

export default App;
