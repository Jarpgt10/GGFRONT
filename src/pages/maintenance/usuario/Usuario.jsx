import React, { useContext } from 'react'

import { PrivateContext } from '@context/PrivateContex';
import CustomerTable from './CustomerTable';


export default function Usuario() {
    const { DATA, usuario } = useContext(PrivateContext);


    const headers = [
        { name: '' },
        { name: 'Rol' },
        { name: 'Puesto' },
        { name: 'Usuario' },
        { name: 'Nombre completo' },
        { name: 'Fecha creacion' },
        { name: 'Estado' },
        { name: 'Contraseña' },
        { name: 'Editar' },
    ]


    return (

        <div>
            <CustomerTable columns={usuario} headers={headers} reload={DATA} />
        </div>
    )
}
