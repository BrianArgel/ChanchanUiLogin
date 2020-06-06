import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import { Link} from '@reach/router';


const Logo = styled.div`
     text-align:center;
     margin-top: 2em;
`;
const User = styled.div`
     text-align:center;
     margin-top: 1em;
     margin-bottom: 1.5em;
`;
const Botones = styled.div`

     font-size:16px;
     color:#81B033 ;
     border: 1px solid #81B033;
     padding: .7em 1em;
     width: 100px;
     display:block;
     border-radius: 5px;
     text-align:center;
     margin: 0 1em 0 1em;
     transition: .3s all ease;
     margin-bottom: 1em;
     a{
         color: #81B033;
         text-decoration: none;
         text-align:center;
         transition: .3s all ease;
     }

     &:hover{
         background-color:#237C2B;

     }
     a:hover{
         color:#fff;
     }
`;
const Aliniarse = styled.div`
     display:flex;
     justify-content:center;
     align-items:center;
`;
const Redes = styled.div`
     display:flex;
     justify-content: center;
     align-items:center;
     margin-top: .5em;

     a{
         color: #3C4233;
         text-decoration: none;
         margin-left:1em;
     }
   

`;

const Inicio = () => {
    return ( 
        <Fragment>
            <Logo>
                <img src="/images/logo.svg" />
            </Logo>
            <User>
                <img src="/images/person.svg" /> 
            </User>
            <Aliniarse>
            <Botones>
                <a href="#!"></a>
                <Link to="InicioLogin">Incio Login</Link>
            </Botones>
            <Botones>
                <Link to="Registrarme">Registrarme</Link>
            </Botones>
             </Aliniarse>
            <Redes>
                <img src="/images/facebook11.svg" />
                <a href="#!">Registrase por facebook</a>
            </Redes>
            <Redes>
                <img src="/images/googlees.svg" />
                <a href="#!">Registrase por Google</a>
            </Redes>
        </Fragment>
     );
}
 
export default Inicio;