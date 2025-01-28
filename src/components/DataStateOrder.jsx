const OrderStates = [
    {
        id: 1,
        state: "Impresión",
        alias: "IMP",
        color: "#FFC602",
        description: "Impresión de materiales en curso."
    },
    {
        id: 2,
        state: "Producción",
        alias: "PROD",
        color: "#011E4A",
        description: "Proceso de producción de materiales."
    },
    {
        id: 3,
        state: "Acabados",
        alias: "ACAB",
        color: "#EAEAEA",
        description: "Finalización y detalles finales del producto."
    },
    {
        id: 4,
        state: "Instalación",
        alias: "INST",
        color: "#F4A261",
        description: "Instalación de los productos en el lugar requerido."
    },
    {
        id: 5,
        state: "Entrega",
        alias: "ENT",
        color: "#2A9D8F",
        description: "Entrega de productos al cliente."
    },
    {
        id: 6,
        state: "Cobro",
        alias: "COB",
        color: "#E76F51",
        description: "Facturación y cobro de los servicios prestados."
    }
];

export default OrderStates;
