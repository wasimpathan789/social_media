import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoodIcon from '@mui/icons-material/Mood';

const Share = () => {
  return (
    <div className="shareContainer">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareTopImage" src="assets/userpng.jpg" alt="" />
                <input className="shareTopSearch" placeholder="What's in your mind Khan" />
            </div>
            <div className="shareCenter">
            <hr />

            </div>
          
            <div className="shareBottom">
                <div className="shareLinkWrapper">
                    <div className="shareLink">
                        <PermMediaIcon className="shareLinkPhotosIcon"/>
                        <span className="shareLinkText"> Photos or Videos</span>
                    </div>
                    <div className="shareLink">
                        <LabelIcon className="shareLinkTagIcon"/>
                        <span className="shareLinkText"> Tag</span>
                    </div>
                    <div className="shareLink">
                        <LocationOnIcon className="shareLinkLocationIcon"/>
                        <span className="shareLinkText"> Location</span>
                    </div>
                    <div className="shareLink">
                        <MoodIcon className="shareLinkMoodIcon"/>
                        <span className="shareLinkText"> Feeling</span>
                    </div>
                
                </div>
                <div className="shareButton">
                    <button>Share</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Share
