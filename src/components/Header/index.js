import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import './header.css'

export default function Header(){
    return(
        <header>
            <Link className='logo' to="/">Filmes</Link>
            <Link className='favoritos' to="/favoritos"><FontAwesomeIcon icon={faStar}/></Link>
        </header>
    )
}