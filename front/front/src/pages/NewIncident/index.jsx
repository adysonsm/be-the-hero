import React, { useState } from 'react'
import './style.css'
import { Link, useHistory } from 'react-router-dom';
import logoimg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'

export default function NewIncident() {
    const history = useHistory();
    const idOng = localStorage.getItem['ongId']
    const [title, setTitle] = useState('');
    const [description, setTDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleIncident(e) {
        e.preventDefault()
        const data = {
            title,
            description,
            value
        }
        try {
            const reponse = await api.post('incidents', data, {
                headers: { Authorization: idOng }
            })
            alert(`Caso cadastrao com sucesso ${reponse.data.id}`);
            history.push('/perfil')
        } catch (error) {
            alert('Erro ao cadastra caso, tente novamento')
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="Be the Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/perfil">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para home

                </Link>
                </section>
                <form onSubmit={handleIncident}>
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setTDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em Reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
