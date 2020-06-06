import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import {Router} from '@reach/router';
import { Link} from '@reach/router';


const Logo = styled.div`
     display:flex;
     text-align:center;
     justify-content:space-around;
     margin-top: 2em;
     align-items:center;
`;
const Inputs = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    margin-top: 4em;
    position: relative;
    margin-bottom: 1em;
    

    input{
        margin-bottom: 1em;
        padding: .7em .7em;
        width: 40%;
        border: 1px solid #8AC924;
        border-radius: 5px;
    }
    input:focus{
        border: 1px solid #8AC924;
    }
    label{
        color: gray;
        margin-bottom: .5em;
    }
`;

const Boton = styled.button`
    display:flex;
    justify-content:center;
    margin: 0 auto;
    align-items:center;
    padding: .9em 1.1em;
    border: none;
    background-color: #237C2B;
    width: 190px;
    border-radius: 5px;
    
    

    a{
        color:#fff;
        text-align:center;
        text-decoration: none;
    }
`;

const Registrarme = () => {
    return ( 
        <Fragment>
             
        <Logo>
             <div>
            <Link to="/">
                <img src="/images/espalda2.svg" />
            </Link>
            </div>
            <div>
            <Link to="/">
            <img src="/images/logo.svg" />
            </Link>
            </div>
        </Logo>

        <Inputs>
        <label>Nombre de Usuario</label>
        <input 
            type="text"
            placeholder="Ejemplo Brian Ponce" />
           <label>Correo Electronico</label>
        <input 
            type="text" 
            placeholder="correo@correo.com"/>
        
        
        <label>Contraseña</label>
        <input 
            type="text" 
            placeholder="*********" />
        
        <label>Repite la Contraseña</label>
        <input 
            type="text" 
            placeholder="*********" />
        </Inputs>
        <Boton>
            <a href="#!">Registrarse ahora!</a>
           
        </Boton>
        

        </Fragment>
     );
}
 
export default Registrarme;