import React, { useContext } from 'react';
import { Tabs } from 'antd';
import Clientes from './cliente/Clientes';
import Puestos from './puesto/Puestos';
import TipoCliente from './tipoCliente/TipoCliente';
import Usuario from './usuario/Usuario';
import Rol from './rol/Rol';
import { AuthContext } from '@context/AuthContext';
import NoPermisos from '@components/NoPermisos';


export default function Maintenance() {
    const { session } = useContext(AuthContext);

    const PERMISOS = session && JSON.parse(session.rol_permiso);
    const P_visualizar = session && PERMISOS[0].value;


    const items = [
        {
            key: 1,
            label: 'Puestos',
            children: P_visualizar ? <Puestos /> : <NoPermisos />
        },
        {
            key: 2,
            label: 'Clientes',
            children: P_visualizar ? <Clientes /> : <NoPermisos />,
        },
        {
            key: 3,
            label: 'Tipo cliente',
            children: P_visualizar ? <TipoCliente /> : <NoPermisos />,
        },
        {
            key: 4,
            label: 'Rol',
            children: P_visualizar ? <Rol /> : <NoPermisos />,
        },
        {
            key: 5,
            label: 'Usuario',
            children: P_visualizar ? <Usuario /> : <NoPermisos />
        },

    ];

    return (
        <div >
            <Tabs defaultActiveKey={1} items={items} />
        </div>
    );
}
