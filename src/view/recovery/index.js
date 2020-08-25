import React, { useState } from 'react';
import Navbar from '../../components/navbar';

import firebase from '../../config/firebase';
import 'firebase/auth';

import './recovery.css';

function Recovery() {
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function RecoveryPassword(){
        firebase.auth().sendPasswordResetEmail(email).then(result => {
            setMsg("Enviamos um link para redefinição de senha para seu email.")
        }).catch(err => {
            setMsg("Verifique se seu email está correto.")
        })
    }

    return (
        <>
            <Navbar />
                <form className="text-center form-login mx-auto mt-5">
                    <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                    
                    <div className="msg my-4 text-center font-weight-bold">
                        <span>{msg}</span>
                    </div>

                    <button onClick={RecoveryPassword} className="btn btn-lg btn-block btn-send" type="button">Recuperar</button>
                </form>
        </>
    )
}

export default Recovery;