// src/componets/VideoCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Css/VideoCard.css";

const VideoCard = ({ video }) => {
    const navigate = useNavigate();

    const handleThumbnailClick = () => {
        // Navigate to the video detail page (you need to create this route)
        navigate(`/video/${video.id}`);
    };

    return (
        <div className="video-card">
            <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="video-thumbnail" 
                onClick={handleThumbnailClick} // Add click handler here
            />
            <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-channel">{video.channel}</p>
                <p className="video-views">{video.views} views • {video.date}</p>
            </div>
        </div>
    );
};

export default VideoCard;