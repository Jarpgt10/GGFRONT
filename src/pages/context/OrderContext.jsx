import { createContext, useState } from "react";
import { httpAddOrUpdateOrden, httpNextStepOrder } from "@services/orden";




const InitialModal = {
    edit: false,
    create: false,
    state: false
}
const InitialDataClient = {}
const InitialItemSeccion = []

const InitialOrder = {
    items: false,
    delivery: false,

}



export const OrderContext = createContext();



export const OrderState = (props) => {


    const [openModal, setOpenModal] = useState(InitialModal);
    const [filterTab, setFilterTab] = useState(1);
    const [dataCliente, setDataCliente] = useState(InitialDataClient);
    const [itemSeccion, setItemSeccion] = useState(InitialItemSeccion);
    const [total, setTotal] = useState(0.00);
    const [isReady, setisReady] = useState(InitialOrder);


    const SERVI_ORDER = {
        createOrder: () => httpAddOrUpdateOrden(),
        stepOrder: () => httpNextStepOrder(),
    }

    const F_ORDER = {
        resetOpenModal: () => { setOpenModal(InitialModal), setDataCliente(InitialDataClient), setItemSeccion(InitialItemSeccion) },
        optionOpenModal: (payload) => setOpenModal(prevState => ({ ...prevState, ...payload })),
        changeFilterTab: (key) => setFilterTab(key),
        setcliente: (payload) => setDataCliente((prevState => (payload))),
        updateItemSeccion: (payload) => setItemSeccion(payload),
        total: (payload) => {
            const itemsValue = payload.items;
            setTotal(itemsValue.reduce((acumulador, item) => acumulador + item.total_item, 0));
            // console.log(itemsValue.reduce((acumulador, item) => acumulador + item.total_item, 0));
        }
    }

    return (
        <OrderContext.Provider
            value={{
                openModal
                , filterTab
                , dataCliente
                , itemSeccion
                , total
                , F_ORDER
                , SERVI_ORDER

            }
            }
        >
            {props.children}
        </OrderContext.Provider >
    );
};
