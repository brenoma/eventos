import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar';
import Event from '../../components/event';

import './home.css';

function Home() {
    return (
        <>
            <Navbar />
            <h1>{useSelector(state => state.userMail)}</h1>
            <h1>{useSelector(state => state.userLogged)}</h1>

            <div className="row mx-1">
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
            </div>
        </>
    )
}

export default Home;