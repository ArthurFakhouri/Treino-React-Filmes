import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css'

export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const res = await api.get("r-api/?api=filmes");
            setFilmes(res.data);
        }
        loadFilmes();
    }, []);

    return (
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((item) => {
                    return (
                        <article key={item.id}>
                            <strong>{item.nome}</strong>
                            <img src={item.foto} alt={item.nome} />
                            <Link to={`/filme/${item.id}`} >Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}