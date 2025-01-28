import React, { useContext } from 'react'

import { PrivateContext } from '@context/PrivateContex';
import CustomerTable from './CustomerTable';




export default function TipoCliente() {
    const { DATA, tipoCliente } = useContext(PrivateContext);
    const headers = [
        { name: 'Codigo' },
        { name: 'Tipo' },
        { name: 'Estado' },
        { name: 'Color' },
        { name: 'Editar' },
    ]


    return (
        <div>
            <CustomerTable columns={tipoCliente} headers={headers} reload={DATA} />
        </div>
    )
}
