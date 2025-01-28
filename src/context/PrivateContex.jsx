import { createContext, useEffect, useState, useCallback } from "react";
import { httpGetPuesto } from '../services/puestos';
import { httpGetCliente, httpGetTipoCliente } from '../services/cliente';
import { httpGetRol, httpGetUsuario } from "../services/usuario";
import { httpGetOrden, httpGetOrderState } from "../services/orden";

export const PrivateContext = createContext();

export const PrivateState = (props) => {
    const [loadingGlobal, setLoadingGlobal] = useState(true);
    const [menu, setMenu] = useState(1);
    const [puesto, setPuesto] = useState([]);
    const [cliente, setCliente] = useState([]);
    const [tipoCliente, setTipoCliente] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [roles, setRoles] = useState([]);
    const [ordenEstado, setOrdenEstado] = useState([]);
    const [orden, setOrden] = useState([]);

    useEffect(() => {
        firtsData();
    }, []);

    const firtsData = async () => {
        try {
            await Promise.all([
                httpGetRol().then(setRoles),
                httpGetOrden().then(setOrden),
                httpGetPuesto().then(setPuesto),
                httpGetCliente().then(setCliente),
                httpGetUsuario().then(setUsuario),
                httpGetOrderState().then(setOrdenEstado),
                httpGetTipoCliente().then(setTipoCliente),
            ]);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoadingGlobal(false);
        }
    };


    // Memoriza las funciones que se pasan a través del contexto
    const ReloadData = useCallback(() => {
        return {
            puestos: () => httpGetPuesto().then(setPuesto),
            tipoClientes: () => httpGetTipoCliente().then(setTipoCliente),
            clientes: () => httpGetCliente().then(setCliente),
            usuarios: () => httpGetUsuario().then(setUsuario),
            roles: () => httpGetRol().then(setRoles),
            estadosOrdenes: () => httpGetOrderState().then(setOrdenEstado),
            ordenes: () => httpGetOrden().then(setOrden)
        };
    }, []);

    const PRIVATEFUNCTIONS = useCallback({
        changeMenu: (payload) => setMenu(payload),
    }, []);

    return (
        <PrivateContext.Provider
            value={{
                DATA: ReloadData(),
                puesto,
                tipoCliente,
                menu,
                cliente,
                PRIVATEFUNCTIONS,
                usuario,
                roles,
                ordenEstado,
                loadingGlobal,
                orden
            }}
        >
            {props.children}
        </PrivateContext.Provider>
    );
};
