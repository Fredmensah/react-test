import React from 'react';
import { User } from '../types/User';
import './Card.css';

interface Props {
    user: User;
    deleteItemFunc: Function
}

const Card = ({user, deleteItemFunc}: Props) => {
    const {id, name, email} = user;

    return (
        <div className="card">
            <div className="right">
                <div className="id">{id}</div>
                <div className="name">{name}</div>
                <div className="email">{email}</div>
            </div>
            <div className="left">
                <button onClick={() => deleteItemFunc(id)}>Delete</button>
            </div>
            
        </div>
    )
}

export default Card;