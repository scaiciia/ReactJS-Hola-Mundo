import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto';


const ComponenteB = ({ contacto }) => {

    const [estado, setEstado] = useState(contacto.conectado);

    const cambiarEstado = () => {
        if (estado === true) {
            setEstado(false);
        } else {
            setEstado(true);
        }
    }

    return (
        <div>
            <h2>
                Apellido y nombre: { contacto.apellido }, { contacto.nombre }
            </h2>
            <h3>
                E-mail: { contacto.email }
            </h3>
            <h4>
                Contacto { estado ? 'En Linea':'No Disponible' }
            </h4>
            <button onClick={cambiarEstado}>Cambiar estado</button>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.objectOf(Contacto),
};


export default ComponenteB;
