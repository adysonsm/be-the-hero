import React, { useState, useEffect } from 'react'
import './style.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

export default function Profile() {
    const history = useHistory();
    const [incidents, setIncidents] = useState([])
    const name = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId')

    useEffect(() => {
        getList()
    }, [ongId]);

    async function getList() {
        await api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            console.log(response)
            setIncidents(response.data)
        })
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/')
    }

    async function handleDeleteIncidents(id) {

        try {
            const response = await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                },
            })

            alert('caso deletado com sucesso');
            getList();

        } catch (error) {
            alert('Erro ao deletar caso, tente novamente')
        }

    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, {name}</span>
                <Link className="button" to="/casos/novo">Cadastrar novo caso</Link>
                <button>
                    <FiPower onClick={handleLogout} size={18} color="#E20041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃo</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button type="button" onClick={() => handleDeleteIncidents(incident.id)}><FiTrash2 size="20" color="#a8a8b3" /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}