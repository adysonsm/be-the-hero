import React, { useState } from 'react'
import './style.css'
import { FiLogOut } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

import heroImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();


        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('perfil')

            console.log(response.data)
        } catch (error) {
            alert('falha no login')
        }

    }
    return (
        <div className="logon-containe">
            <section className="form">
                <img src={logoImage} alt="Be the Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        type="text"
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/cadastro">
                        <FiLogOut size={16} color="#E02041" />
                        Não tem cadastro

                    </Link>
                </form>
            </section>

            <img src={heroImage} alt="Heros" />
        </div>
    );
}