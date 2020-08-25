import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar';

import firebase from '../../config/firebase';
import 'firebase/auth';

import './newevent.css';


function NewEvent() {
    const [loading, setLoading] = useState();
    const [messageType, setMessageType] = useState();
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [image, setImage] = useState();
    // const [userMail, setUserMail] = useState();
    const userMail = useSelector(state => state.userMail);

    const storage = firebase.storage();
    const db = firebase.firestore();


    function register() {
        setMessageType(null);
        setLoading(1);

        storage.ref(`images/${image.name}`).put(image).then(() => {
            db.collection('events').add({
                title: title,
                type: type,
                description: description,
                date: date,
                time: time,
                image: image.name,
                user: userMail,
                views: 0,
                public: 1,
                createdAt: new Date()
            }).then(() => {
                setMessageType('sucess');
                setLoading(0);
            }).catch(err => {
                setMessageType('error');
                setLoading(0);
            })
        })
    }

    return (
        <>
            <Navbar />
            <div className="col-12 mt-5">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
                </div>

                <form>
                    <div className="form-group">
                        <label>Título:</label>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Tipo do Evento:</label>
                        <select onChange={(e) => setType(e.target.value)} className="form-control">
                            <option disabled selected value>-- Selecione um tipo --</option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Descrição do Evento:</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} className="form-control" rows="3" />
                    </div>

                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input onChange={(e) => setDate(e.target.value)} type="date" className="form-control" />
                        </div>

                        <div className="col-6">
                            <label>Hora:</label>
                            <input onChange={(e) => setTime(e.target.value)} type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Imagem do Evento:</label>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control" />
                    </div>

                    <div className="row">
                        {
                            loading > 0 ? <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Loading ... </span></div>
                                : <button onClick={register} type="button" className="btn mx-5 btn-lg btn-block mt-3 mb-5 btn-event">Cadastrar Evento</button>
                        }
                    </div>
                </form>

                <div className='msg-login text-center mt-2'>
                    {messageType === 'sucess' && <span><strong>WoW!</strong> Evento publicado. &#128526;</span>}
                    {messageType === 'error' && <span><strong>Ops!</strong> Não foi possível publicar o evento. &#128533;</span>}
                </div>
            </div>
        </>
    )
}

export default NewEvent;