import React, { useContext } from 'react'
import CustomerTable from './CustomerTable'
import { PrivateContext } from '@context/PrivateContex';

export default function Puestos() {

    const { DATA, puesto } = useContext(PrivateContext);

    const headers = [
        { name: 'Codigo' },
        { name: 'Puesto' },
        { name: 'Estado' },
        { name: 'Editar' },

    ]

    return (
        <div className=''>
            <CustomerTable columns={puesto} headers={headers} reload={DATA} />
        </div>
    )
}
