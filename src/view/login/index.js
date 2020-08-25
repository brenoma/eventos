import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';

import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageType, setMessageType] = useState('');

    const dispatch = useDispatch();


    function logar() {

        firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
            setMessageType('sucess');
            setTimeout(() => {
                dispatch({ type: 'LOG_IN', userMail: email });
            }, 2000);
        }).catch(err => {
            setMessageType('error');
        });

    }

    return (
        <div className="login-content d-flex align-itens-center">

            {
                useSelector(state => state.userLogged) > 0 ? <Redirect to='/' /> : null
            }

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <i class="far fa-smile-wink text-white fa-5x"></i>
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="inputEmail"
                    class="form-control my-2"
                    placeholder="Email"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="inputPassword"
                    class="form-control my-2"
                    placeholder="Senha"
                />

                <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Entrar</button>

                <div className='msg-login text-white text-center my-4'>
                    {messageType === 'sucess' && <span><strong>Bem-Vindo!</strong> Você está conectado. &#128526;</span>}
                    {messageType === 'error' && <span><strong>Ops!</strong> Usuário ou senha estão incorretos. &#128533;</span>}
                </div>

                <div className='opcoes-login mt-3 text-center'>
                    <Link to='recovery' className='mx-2'>Recuperar Senha</Link>
                    <span className='text-white'>&#9733;</span>
                    <Link to='register' className='mx-2'>Cadastro</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;