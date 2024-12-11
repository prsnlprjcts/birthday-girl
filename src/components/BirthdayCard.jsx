import React from 'react';
import './BirthdayCard.css';
import { HiArrowNarrowDown } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

const BirthdayCard = ({ to, from, message }) => {
    return (
        <div className="birthday-card">
            <div className="card-header">
                <h1>Happy Birthday!</h1>
            </div>
            <div className="card-content">
                <p className="card-to"><strong>To:</strong> {to} 💖</p>
                <p className="card-message">{message}</p>
                <p className="card-from"><strong>From:</strong> {from}</p>
                <div className='arrow-div'>
                    <HiArrowNarrowDown className='arrow' />
                </div>
            </div>
        </div>
    );
};

export default BirthdayCard;
