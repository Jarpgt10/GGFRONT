import React, { useContext } from 'react'
import { PrivateContext } from '@context/PrivateContex';
import CustomerTable from './CustomerTable';

export default function Clientes() {

    const { DATA, cliente } = useContext(PrivateContext);




    const headers = [
        { name: 'Nit' },
        { name: 'Empresa' },
        { name: 'Contacto' },
        { name: 'Emp.Telefono' },
        { name: 'Emp.Email' },
        { name: 'Cto.Telefono' },
        { name: 'Cto.Email' },
        { name: 'Tipo cliente' },
        { name: 'Estado' },
        { name: 'Editar' },


    ]

    return (

        <CustomerTable columns={cliente} headers={headers} reload={DATA} />

    )
}
