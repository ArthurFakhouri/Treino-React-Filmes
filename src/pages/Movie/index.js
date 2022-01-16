import './style.css'
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            const res = await api.get(`r-api/?api=filmes/${id}`);

            if (res.data.length === 0) {
                //Tentou acessar com um ID que não existe, navego ele para home!
                navigate('*');
                return;
            }

            setFilme(res.data);
            setLoading(false);
        }
        loadFilme();

        return () => {
            console.log('COMPONENTE DESMONTADO');
        }
    }, [id, navigate]);

    function salvaFilme() {
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo)=>filmeSalvo.id === filme.id);

        if(!hasFilme){
            filmesSalvos.push(filme);
            localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
            toast.success('Filme salvo com sucesso!');
        } else {
            toast.info('Você já possui esse filme salvo.');
        }
    }

    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando seu filme...</h1>
            </div>
        )
    }
    return (
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            {filme.sinopse}
            <div className='botoes'>
                <button onClick={salvaFilme}>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer `}>Trailer</a>
                </button>
            </div>
        </div>
    )
}