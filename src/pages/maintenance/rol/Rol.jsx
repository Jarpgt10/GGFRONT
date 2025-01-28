import React, { useContext } from 'react'
import { PrivateContext } from '@context/PrivateContex';
import CustomerTable from './CustomerTable';




export default function Rol() {
    const { DATA, roles } = useContext(PrivateContext);
    const headers = [
        { name: 'Rol' },
        { name: 'Estado' },
        { name: 'Editar' },
    ]



    return (
        <div>
            <CustomerTable columns={roles} headers={headers} reload={DATA} />
        </div>
    )
}
