import React, { useState } from 'react';
import VideoCard from './VideoCard';
import "../Css/Home.css";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const videos = [
        {
            id: 1,
            title: 'React Tutorial for Beginners',
            channel: 'CodeAcademy',
            views: '1.2M',
            date: '2 days ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 2,
            title: 'Understanding JavaScript Closures',
            channel: 'DevTips',
            views: '800K',
            date: '1 week ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 3,
            title: 'CSS Flexbox Crash Course',
            channel: 'DesignCourse',
            views: '500K',
            date: '3 days ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 4,
            title: 'Building a REST API with Node.js',
            channel: 'BackendMaster',
            views: '300K',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 5,
            title: 'Introduction to TypeScript',
            channel: 'TypeScript Academy',
            views: '600K',
            date: '1 week ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 6,
            title: 'Advanced CSS Techniques',
            channel: 'CSS Mastery',
            views: '400K',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 7,
            title: 'JavaScript ES6 Features',
            channel: 'JavaScript Weekly',
            views: '1M',
            date: '3 days ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 8,
            title: 'Building Mobile Apps with React Native',
            channel: 'React Native School',
            views: '750K',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 9,
            title: 'Introduction to GraphQL',
            channel: 'GraphQL Academy',
            views: '300K',
            date: '1 month ago',
          
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 10,
            title: 'Web Accessibility Basics',
            channel: 'A11y Academy',
            views: '200K',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 11,
            title: 'Mastering Git and GitHub',
            channel: 'GitHub Guru',
            views: '1.5M',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 12,
            title: 'Introduction to Docker',
            channel: 'Docker Academy',
            views: '600K',
            date: '3 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 13,
            title: 'Building RESTful APIs with Express',
            channel: 'Express Mastery',
            views: '400K',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 14,
            title: 'JavaScript Design Patterns',
            channel: 'Design Patterns Academy',
            views: '500K',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 15,
            title: 'React Hooks in Depth',
            channel: 'React Academy',
            views: '300K',
            date: '1 week ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 16,
            title: 'Understanding Async/Await',
            channel: 'JavaScript Weekly',
            views: '450K',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 17,
            title: 'CSS Grid Layout',
            channel: 'DesignCourse',
            views: '700K',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        
        {
            id: 18,
            title: 'Building a Chat App with Socket.io',
            channel: 'Web Dev Simplified',
            views: '600K',
            date: '3 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 19,
            title: 'Introduction to Firebase',
            channel: 'Firebase Academy',
            views: '350K',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 20,
            title: 'Creating Responsive Websites',
            channel: 'Responsive Design School',
            views: '800K',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 21,
            title: 'JavaScript for Beginners',
            channel: 'JavaScript Academy',
            views: '1.1M',
            date: '1 week ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 22,
            title: 'Understanding the DOM',
            channel: 'Web Development Basics',
            views: '500K',
            date: '3 days ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 23,
            title: 'Introduction to SQL',
            channel: 'Database Academy',
            views: '400K',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 24,
            title: 'Python for Data Science',
            channel: 'Data Science Academy',
            views: '900K',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 25,
            title: 'Machine Learning Basics',
            channel: 'AI Academy',
            views: '1.3M',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 26,
            title: 'Introduction to Blockchain',
            channel: 'Blockchain Academy',
            views: '600K',
            date: '3 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 27,
            title: 'Getting Started with Kubernetes',
            channel: 'Kubernetes Academy',
            views: '500K',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 28,
            title: 'Introduction to Web Development',
            channel: 'Web Dev Academy',
            views: '1.4M',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 29,
            title: 'Understanding RESTful Services',
            channel: 'API Academy',
            views: '300K',
            date: '1 month ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
        },
        {
            id: 30,
            title: 'Introduction to Cloud Computing',
            channel: 'Cloud Academy',
            views: '800K',
            date: '2 weeks ago',
            thumbnail: 'https://media.istockphoto.com/id/458942047/photo/youtube-logo-on-ipad-screen.jpg?s=612x612&w=0&k=20&c=j1VEqaVs2NfEY3djMHkCaaEo7bIgcbkGX_6LYTysu9s=',
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

export default Home;