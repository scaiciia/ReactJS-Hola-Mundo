import React from 'react';
import { Contacto } from '../../models/contacto';
import ComponenteB from '../pure/componenteB';


const ComponenteA = () => {
    
    const defaultContacto = new Contacto('Santiago', 'Caiciia', 'scaiciia@gmail.com', false);
    

    return (
        <div>
            <ComponenteB contacto={defaultContacto}></ComponenteB>
        </div>
    );
};





export default ComponenteA;
