import React, { Component } from 'react'

export class Cita extends Component {
    eliminarCita=()=>{
        // console.log(`Eliminado cita id: ${this.props.info.id}`);
        this.props.borrarCita(this.props.info.id)
    }
    render() {
        const {nombreMascota,propietario,fecha,hora,sintomas}=this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{nombreMascota}</h3>
                    <p className="card-text"><span>Nombre de Dueño:</span>{propietario}</p>
                    <p className="card-text"><span>Fecha:</span>{fecha}</p>
                    <p className="card-text"><span>Hora:</span>{hora}</p>
                    <p className="card-text"><span>Sintomas:</span></p>
                    <p className="card-text">{sintomas}</p>
                    <button className="alert alert-danger" onClick={this.eliminarCita}>Borrar </button>
                </div>
            </div>
        )
    }
}

export default Cita
