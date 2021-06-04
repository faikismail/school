import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Header.css';
import { logout } from '../../../core/services/AuthService';

export function Header() {

    const [redirect, setRedirect] = useState(false);
    
    const onLogout = () => {
        logout();
        setRedirect(true);
    }

    return(
        <>
        { redirect && <Redirect to="/login"/>}
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
                    <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/"> Home </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users-list">Users List</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users/create">Create User</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/vehicles-list">Vehicles List</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/vehicles/create">Add vehicle</Link> 
            </li>
            </ul>
            <span className="logout-btn" onClick={onLogout}>Logout</span>
        </div>
        </nav>
        </header>
        </>
    );
}