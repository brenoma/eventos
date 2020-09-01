import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';

import Navbar from '../../components/navbar';
import Event from '../../components/event';

import './eventsdetail.css';

function eventsDetail() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <img src="https://via.placeholder.com/150x100" alt="Banner" className="img-banner"/>
                </div>

                <div className="row mt-5 d-flex justify-content-around">
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-ticket-alt fa-2x"></i>
                        <h5><strong>Tipo</strong></h5>
                        <span className="mt-3">Festa</span>
                    </div>
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-calendar-alt fa-2x"></i>
                        <h5><strong>Data</strong></h5>
                        <span className="mt-3">10/10/2020</span>
                    </div>
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-clock fa-2x"></i>
                        <h5><strong>Hora</strong></h5>
                        <span className="mt-3">16:20</span>
                    </div>
                </div>

                <div className="column box-details mt-5">
                    <h5 className="mx-auto"><strong>Detalhes do Evento</strong></h5>
                    <p className="text-justify p-3">AHSOEUHAOSEsSadsaiodjasiodjoiasdjoasidjoiasdjoasidjoaisdjadaospidjoiasjdoijsaoidhasoiduhasodijoiasdjAOSN!@*U)JSAOISAODHJ</p>
                </div>

                <Link to='' className="btn-edit"><i className="fas fa-pen-square fa-3x"></i></Link>
            </div>
        </>
    )
}

export default eventsDetail;