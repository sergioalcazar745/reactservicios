import axios from 'axios'
import React, { Component } from 'react'
import Global from '../../Global';
import MaestroEmpleado from './MaestroEmpleado';
export default class MaestroDepartamentos extends Component {

    state = {
        departamentos: [],
        statusDepartamentos: false,
        iddepartamento: 0
    }

    selectDepartamentoRef = React.createRef();

    cargarEmpleados = (e) => {
        e.preventDefault();
        var id = this.selectDepartamentoRef.current.value;
        this.setState({
            iddepartamento: id
        })
    }

    loadDepartamentos = () => {
        var request = Global.urlDepartamentos + "api/departamentos";
        var options = [];

        axios.get(request).then(response => {
            for (var departamento of response.data) {
                options.push(<option key={departamento.Numero} value={departamento.Numero}>{departamento.Nombre}</option>)
            }
            this.setState({
                departamentos: options,
                statusDepartamentos: true
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos()
    }

    render() {
        return (
            <div>
                <h1>Maestro Departamentos</h1>
                <form onSubmit={this.cargarEmpleados}>
                    <select ref={this.selectDepartamentoRef}>
                        {
                            this.state.statusDepartamentos &&
                            this.state.departamentos
                        }
                    </select>
                    <button>
                        Cargar empleados
                    </button>
                </form>
                {
                    this.state.iddepartamento != 0 &&
                    <MaestroEmpleado iddepartamento={this.state.iddepartamento}/>
                }
            </div>
        )
    }
}
