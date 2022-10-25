import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './RutasParametros/Home';
import PageNotFound from './RutasParametros/PageNotFound';
import { useParams } from 'react-router-dom';
import TablaMultiplicar from './RutasParametros/TablaMulitplicar';
import MenuRutas from './RutasParametros/MenuRutas';

export default class Router extends Component {
    render() {

        function GetParamsTablaMultiplicar(){
            var {numero} = useParams();
            return <TablaMultiplicar numero={numero}/>
        }

        return (
            <BrowserRouter>
            <MenuRutas/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tabla-multiplicar/:numero' element={<GetParamsTablaMultiplicar/>} />
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}