import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';

import Navbar from '../../components/navbar';
import Event from '../../components/event';

import './eventsdetail.css';

function EventsDetail(props) {

    const [event, setEvent] = useState({});
    const [urlImg, setUrlImg] = useState({});
    const [loading, setLoading] = useState(1);
    const userLogged = useSelector(state => state.userMail);

    useEffect(() => {
        firebase.firestore().collection('events').doc(props.match.params.id).get().then(result => {
            setEvent(result.data());
            firebase.storage().ref(`images/${event.image}`).getDownloadURL().then(url => {
                setUrlImg(url)
                setLoading(0);
            })
        })
    })


    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {
                    loading ? <div className="row"><div class="spinner-border text-danger mx-auto mt-5" role="status"><span class="sr-only"></span></div></div>
                        :
                        <div>
                            <div className="row">
                                <img src={urlImg} alt="Banner" className="img-banner" />

                                <div className="col-12 text-right mt-1 views">
                                    <i className="fas fa-eye"></i> <span>{event.views}</span>
                                </div>
                                <h3 className="mx-auto mt-5 title"><strong>{event.title}</strong></h3>
                            </div>

                            <div className="row mt-5 d-flex justify-content-around">
                                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                    <i className="fas fa-ticket-alt fa-2x"></i>
                                    <h5><strong>Tipo</strong></h5>
                                    <span className="mt-3">{event.type}</span>
                                </div>
                                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                    <i className="fas fa-calendar-alt fa-2x"></i>
                                    <h5><strong>Data</strong></h5>
                                    <span className="mt-3">{event.date}</span>
                                </div>
                                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                    <i className="fas fa-clock fa-2x"></i>
                                    <h5><strong>Hora</strong></h5>
                                    <span className="mt-3">{event.time}</span>
                                </div>
                            </div>

                            <div className="row box-details mt-5">
                                <div className="col-12 text-center">
                                    <h5><strong>Detalhes do Evento</strong></h5>
                                </div>
                                <div className="col-12 text-center">
                                    <p>{event.description}</p>
                                </div>
                            </div>

                            {
                                userLogged === event.user ?
                                    <Link to='' className="btn-edit"><i className="fas fa-pen-square fa-3x"></i></Link>
                                    : ''
                            }

                        </div>
                }
            </div>
        </>
    )
}

export default EventsDetail;