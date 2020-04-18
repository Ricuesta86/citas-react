import React, { Component } from 'react'

export class ListaCitas extends Component {
    render() {

        const citas = this.props.citas

        // console.log(Object.keys(citas).length);
        const mensaje=Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra tus Citas aqui'
        
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                </div>
            </div>
        )
    }
}

export default ListaCitas
