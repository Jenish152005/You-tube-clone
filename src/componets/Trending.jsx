import React, { useState } from 'react';
import VideoCard from './VideoCard';
import "../Css/Home.css";

const Trending = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const videos = [
        {
            id: 1,
            title: 'Python Crash Course',
            channel: 'CodeWithMe',
            views: '2.3M',
            date: '1 day ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
        {
            id: 2,
            title: 'Mastering React.js',
            channel: 'React Pro',
            views: '1.5M',
            date: '3 days ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
        {
            id: 3,
            title: 'JavaScript Algorithms Explained',
            channel: 'Code Geek',
            views: '900K',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
        {
            id: 4,
            title: 'Introduction to Cloud Security',
            channel: 'Secure Cloud',
            views: '450K',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
        {
            id: 5,
            title: 'Data Structures in Java',
            channel: 'Java Mastery',
            views: '1.1M',
            date: '4 days ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
        {
            id: 6,
            title: 'Intro to Machine Learning',
            channel: 'AI Hub',
            views: '700K',
            date: '3 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
        {
            id: 7,
            title: 'Building REST APIs with Flask',
            channel: 'Flask Academy',
            views: '600K',
            date: '2 months ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
        {
            id: 8,
            title: 'Kubernetes for Beginners',
            channel: 'Cloud Native School',
            views: '900K',
            date: '1 week ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
        {
            id: 9,
            title: 'Web Development Basics',
            channel: 'Dev Start',
            views: '1.2M',
            date: '5 days ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
        {
            id: 10,
            title: 'Understanding Graph Databases',
            channel: 'Data Insights',
            views: '800K',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/1593520130/photo/e-learning-online-class-with-document-workshop-in-online-class-watching-video-on-internet.jpg?s=612x612&w=0&k=20&c=L6nBqzJv1lUcKMx5pl_LnKW4bow7xANbElWZXaI_Fms=',
        },
    ];

    // Function to handle search input change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter videos based on search query
    const filteredVideos = videos.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        video.channel.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home">
    
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search by title or channel..." 
                    className="search-input" 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                />
                <button onClick={handleSearchChange} >Search</button>
            </div>
            <div className="video-grid">
                {filteredVideos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default Trending;