import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';

import Navbar from '../../components/navbar';
import Event from '../../components/event';

import './home.css';

function Home() {

    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    let listEvents = [];

    useEffect(() => {
        firebase.firestore().collection('events').get().then(async (result) => {
            await result.docs.forEach(doc => {
                if (doc.data().title.toUpperCase().indexOf(search.toUpperCase()) >= 0) {
                    listEvents.push({
                        id: doc.id,
                        ...doc.data()
                    });
                }
            })

            setEvents(listEvents);
        })
    })

    return (
        <>
            <Navbar />
            {/* <h1>{useSelector(state => state.userMail)}</h1>
            <h1>{useSelector(state => state.userLogged)}</h1> */}

            <div className="row p-5">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="form-control text-center"
                    placeholder="Pesquisar evento pelo título"
                />
            </div>

            <div className="row p-3 mx-1">
                {events.map(item => <Event
                    id={item.id}
                    img={item.image}
                    title={item.title}
                    description={item.description}
                    views={item.views}
                />)}
            </div>
        </>
    )
}

export default Home;