import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { useSelector } from 'react-redux';

import './home.css';

function Home() {
    return (
        <>
            <Navbar />
            <h1>{useSelector(state => state.userMail)}</h1>
            <h1>{useSelector(state => state.userLogged)}</h1>
        </>
    )
}

export default Home;