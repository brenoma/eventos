import React, { useState } from 'react';

import firebase from '../../config/firebase';
import 'firebase/auth';

import Navbar from '../../components/navbar';
import './register.css';

function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [messageType, setMessageType] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(0);

    function handleRegister() {
        setLoading(1);

        setMessageType(null);

        if (!email || !password) {
            setLoading(0);
            setMessageType('error');
            setMessage('Você precisa informar o email e a senha para fazer o cadastro.');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
            setLoading(2);
            setMessageType('sucess');
        }).catch(error => {
            setLoading(0);
            setMessageType('error')
            switch (error.message) {
                case 'Password should be at least 6 characters':
                    setMessage('A senha deve ter pelo menos 6 caracteres!');
                    break;
                case 'The email address is already in use by another account.':
                    setMessage('Este email já está sendo utilizado por outro usuário!');
                    break;
                case 'The email address is badly formatted.':
                    setMessage('O formato do seu email é inválido!');
                    break;
                default:
                    setMessage('Não foi possível cadastrar. Tente novamente mais tarde!');
                    break;

            }
        })
    }

    return (
        <>
            <Navbar />
            <div className="form-signup">
                <form className="text-center form-login mx-auto mt-5">
                    <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control my-2"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control my-2"
                        placeholder="Senha"
                    />


                    {/* {
                    loading ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading ... </span></div>
                        : <button onClick={handleRegister} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-register">Cadastrar</button>
                } */}

                    {loading === 0 && <button onClick={handleRegister} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-register">Cadastrar</button>}
                    {loading === 1 && <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading ... </span></div>}
                    {loading === 2 && <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-register">Voltar</button>}

                    <div className='msg-login text-black text-center my-4'>
                        {messageType === 'sucess' && <span><strong>Bem-Vindo!</strong> Usuário cadastrado com sucesso. &#128526;</span>}
                        {messageType === 'error' && <span><strong>Ops!</strong> {message} &#128533;</span>}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;
