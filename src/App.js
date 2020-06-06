import React, {Fragment} from 'react';
import Incio from './Components/Inicio';
import IncioLogin from './Components/InicioLogin';
import Registrarme from './Components/Registrarme';
import Inicio from './Components/Inicio';
import {Router} from '@reach/router';
  




function App() {
  return (
    <Fragment>
       <Router >
        <Inicio path="/" />
        <IncioLogin path="InicioLogin" />
        <Registrarme path="Registrarme" />
      </Router>
    </Fragment>
  );
}

export default App;
