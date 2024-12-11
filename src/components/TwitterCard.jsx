import React from 'react';
import './TweetCard.css';

const TweetCard = ({ name, username, text, tweetImage, date }) => {
    return (
        <div className="tweet-card">
            <div className="tweet-content">
                <div className="tweet-header">
                    <span className="name">{name}</span>
                    <span className="username">{username}</span>
                    <span className="date">{date}</span>
                </div>
                <p className="tweet-text">{text}</p>
                {tweetImage && <img src={tweetImage} alt="Tweet" className="tweet-image" />}
            </div>
        </div>
    );
};

export default TweetCard;