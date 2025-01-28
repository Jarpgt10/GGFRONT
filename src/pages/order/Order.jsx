import React from 'react'
import TableOrder from './TableOrder'
import { useContext } from 'react';
import { PrivateContext } from '@context/PrivateContex';
import Loading3 from '@components/Loading3';
import { OrderState } from '../context/OrderContext';



export default function Order() {
    const { ordenEstado, orden, loadingGlobal, DATA, } = useContext(PrivateContext);

    if (loadingGlobal) {
        return <Loading3 />;
    }

    const headers = [
        { name: 'No.Orden' },
        { name: 'Cliente' },
        { name: 'telefono' },
        { name: 'Creacion' },
        { name: 'Actualizo' },
        { name: 'Tipo Cliente' },
        { name: 'Estado Orden' },
        { name: 'Opciones' },

    ];


    return (
        <OrderState>
            <TableOrder headers={headers} ordenEstado={ordenEstado} columns={orden} loadingGlobal={loadingGlobal} reload={DATA} />
        </OrderState>
    )
}
