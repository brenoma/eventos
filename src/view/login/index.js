import React from 'react';
import './login.css';

function Login() {
    return (
        <div className="login-content d-flex align-itens-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />

                <button class="btn btn-lg btn-block btn-login" type="submit">Entrar</button>

                <div className='msg-login text-white text-center my-4'>
                    <span><strong>Bem-Vindo!</strong> Você está conectado. &#128526;</span>
                    <br></br>
                    <span><strong>Ops!</strong> Usuário ou senha estão incorretos. &#128533;</span>
                </div>

                <div className='opcoes-login mt-3 text-center'>
                    <a href='#' className='mx-2'>Recuperar Senha</a>
                    <span className='text-white'>&#9733;</span>
                    <a href='#' className='mx-2'>Cadastro</a>
                </div>
            </form>
        </div>
    )
}

export default Login;