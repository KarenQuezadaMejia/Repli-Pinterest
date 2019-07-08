import React from 'react';
import '../CSS/Nav.css';


function Navbar() {


    return (
        <div className="container">
            <navbar className="fixed-navbar">
                <ul className="listNavbar">
                    <li><i class="fab fa-pinterest"></i></li>
                    <li><strong><input className="search" type="search" placeholder="Buscar"/></strong></li>
                    <li><strong>Inicio</strong></li>
                    <li><strong>Siguiendo</strong></li>
                    <li><i class="fas fa-user"></i></li>
                    <li><i class="fas fa-comment-dots"></i></li>
                    <li><i class="fas fa-bell"></i></li>
                    <li><i class="fas fa-ellipsis-h"></i></li>
                </ul>
            </navbar>
        </div>
    )

}

export default Navbar;