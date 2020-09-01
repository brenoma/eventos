import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../config/firebase';

import './event.css';

function Event({ id, img, title, description, views }) {

    const [urlImg, setUrlImg] = useState();

    useEffect(() => {
        firebase.storage().ref(`images/${img}`).getDownloadURL().then(url => setUrlImg(url));
    }, [urlImg]);

    return (
        <div className="col-md-3 col-sm-12 p-3">
            <img src={urlImg} className="card-img-top img-card" alt="Imagem do Evento" />

            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-justify">
                    {description}
                </p>

                <div className="row footer-card d-flex align-items-center">

                    <div classname="col-6">
                        <Link to={"/eventsdetail/" + id} className="btn btn-sm btn-details">+ Detalhes</Link>
                    </div>

                    <div className="col-6 text-right">
                        <i class="fas fa-eye"></i><span className="ml-1">{views}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;