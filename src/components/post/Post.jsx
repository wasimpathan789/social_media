import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {Users} from '../../dummyData.js';
import { useState } from "react";
const Post = ({post}) => {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  console.log(post);

  

  const likeHandler =({})=>{
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked)
    // setLike(!like);
    console.log(like);
  }
  return (

   
    <div className="post">
        <div key={post.id} className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img src={Users.filter(u=>u.id==post.userId)[0].profilePicture} postTopImage alt="" />
              <div className="postTopUsername">{Users.filter(u=>u.id== post.userId)[0].username}</div>
              <span className="postTopTime">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVertIcon className="postTopDott" />
            </div>
          </div>
          <div className="postCenter">
            <span className="postCenterText">{post.description}</span>
            <div className="postCenterImage">
              <img src={post.image} alt="" />
            </div>
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <div className="postThumbUP">
                <ThumbUpIcon onClick={likeHandler}  />
              </div>
              <div className="postHeart">
                <FavoriteIcon  onClick={likeHandler}  />
              </div>

              <span className="postBottomLeftText">{like} people like it</span>
            </div>
            <div className="postBottomRight">{post.comments} comments</div>
          </div>
          <div>
            <hr />
          </div>
          <div className="likeAndComments">
            <div className="postLike">
              <ThumbUpOffAltIcon />
              Like
            </div>
            <div className="postComments">
              <ChatBubbleOutlineIcon />
              Comments
            </div>
          </div>
          <div>
            <hr />
          </div>
        </div>
      
    </div>
  );
};

export default Post;