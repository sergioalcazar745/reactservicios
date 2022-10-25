import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    
                    <li>
                        <NavLink to="/">Home React</NavLink>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <NavLink to="/tabla-multiplicar/5">Tabla multiplicar React</NavLink>
                        <a href='/tabla-multiplicar/5'>Tabla multiplicar</a>
                    </li>
                    <li>
                        <NavLink to="/tabla-multiplicar/7">Tabla multiplicar React</NavLink>
                        <a href='/tabla-multiplicar/7'>Tabla multiplicar</a>
                    </li>
                    <li>
                        <NavLink to="/fghfgh">PageNotFound</NavLink>
                        <a href='/dghfghfgh'>PageNotFound</a>
                    </li>
                </ul>
            </div>
        )
    }
}
