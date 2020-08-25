import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './event.css';

function Event() {
    return (
        <div className="col-md-3 col-sm-12">
            <img src="https://via.placeholder.com/500" className="card-img-top img-card" alt="Imagem do Evento" />

            <div className="card-body">
                <h5>Título do Evento</h5>
                <p className="card-text text-justify">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>

                <div className="row footer-card d-flex align-items-center">

                    <div classname="col-6">
                        <Link to="/" className="btn btn-sm btn-details">+ Detalhes</Link>
                    </div>

                    <div className="col-6 text-right">
                        <i class="fas fa-eye"></i><span className="ml-1">1337</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;