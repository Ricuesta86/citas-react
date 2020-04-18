import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCitas from './componentes/AgregarCitas';

class App extends Component {

  // State
  state={
    citas:[]
  }

  // Funcion de para crear una cita
  crearCita=(nuevaCita)=>{
    // console.log(nuevaCita);
    // Copiando las citas y agrego la nueva cita    
    const citas=[...this.state.citas,nuevaCita];

    console.log(citas);

    this.setState({
      citas
    })
    
  }


  render(){
      return (
        <div className="container">
              <Header 
                titulo={"Administrador de Pacientes de Veterianria"}
              />
              <div className="row">
                <div className="col-md-6">
                  <AgregarCitas 
                    crearCita={this.crearCita}
                  />
                </div>
              </div>
          </div>
        );
  }
}

export default App;
