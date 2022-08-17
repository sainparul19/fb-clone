import React from "react";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrXSXb_jayac8vtbpTX_FYximkklGxSWZgA&usqp=CAU"
        message="WOW This works ."
        timestamp="This is a timestamp"
        username="Jackkk"
        image="https://cdn.dribbble.com/users/879147/screenshots/7906715/media/1b1d2ef35dab525ed63b8b5816813132.jpg?compress=1&resize=400x300"
      />
      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU"
        message="Gorgeous !!!"
        timestamp="This is a timestamp"
        username="Anny"
        image="https://www.lavacanza.in/imgHandler.ashx?image=/UserUploads/Editted-Images/mcqmdT27JhYHBLbFGU8i.jpg&width=700"
      />
      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&usqp=CAU"
        message="This is Amazing ..."
        timestamp="This is a timestamp"
        username="Mark"
        image="https://images.unsplash.com/photo-1506316940527-4d1c138978a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      />
    </div>
  );
}

export default Feed;
