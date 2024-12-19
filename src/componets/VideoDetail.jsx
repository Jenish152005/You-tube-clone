// src/componets/VideoDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import "../Css/VideoDetail.css"; // Import the CSS file for styling
import video from "../assets/video.mp4"
const VideoDetail = () => {
    const { id } = useParams();

    return (
        <div className="video-detail-container">
            <h2>Video Detail for Video ID: {id}</h2>
            <div className="video-wrapper">
                <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoDetail;