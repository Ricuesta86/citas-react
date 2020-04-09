import React from 'react';
import Header from './componentes/Header';
import AgregarCitas from './componentes/AgregarCitas';

function App() {
  return (
    <div className="container">
        <Header 
          titulo={"Administrador de Pacientes de Veterianria"}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCitas />
          </div>
        </div>
    </div>
  );
}

export default App;
