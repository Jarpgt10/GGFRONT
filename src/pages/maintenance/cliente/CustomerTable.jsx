import React, { useState } from "react";
import Icon from "@utilities/Icon";
import { Modal } from "antd";
import ModalCliente from "./ModalCliente";

const CustomerTable = ({ columns, headers, reload }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const cantidad = columns.length;
    const [openModal, setOpenModal] = useState(false);
    const [modalKey, setModalKey] = useState(0);
    const [data, setData] = useState(null);

    const handleEdit = (obj) => {
        setOpenModal(true);
        setData(obj);
    };

    const afterClose = () => {
        setData(null);
        setModalKey(prevKey => prevKey + 1);
        reload.clientes();
    };

    const handleOnClose = () => {
        setOpenModal(false);

    };

    return (
        <div className="p-4 bg-[#f6f7f8] rounded-md shadow-[#00000026] shadow-sm h-[70vh] overflow-y-auto">
            <div className="flex flex-col sm:flex-row justify-start  items-center mb-4 gap-2">
                <input
                    type="text"
                    placeholder="Buscar cliente..."
                    className="w-full sm:w-[80%] md:w-auto px-4 py-2 border rounded-md shadow-sm focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="flex gap-2">
                    <Icon.reload
                        onClick={() => reload.clientes()}
                        size={25}
                        className="cursor-pointer style-icon-header"
                    />
                    <Icon.add
                        onClick={() => setOpenModal(true)}
                        size={25}
                        className="cursor-pointer style-icon-header"
                    />
                </div>
            </div>


            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg px-2  h-3/5">
                    <thead className="text-[#c6c6c8]">
                        <tr>
                            {headers.map((header, index) => (
                                <th className="py-2 px-4 text-left whitespace-nowrap" key={index}>
                                    {header.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {columns
                            .filter((opt) =>
                                opt.empresa != '' ? opt.contacto.toLowerCase().includes(searchTerm.toLowerCase()) :
                                    opt.contacto.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((opt, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-3 px-4">{opt.nit}</td>
                                    <td className="py-3 px-4">{opt.empresa}</td>
                                    <td className="py-3 px-4">{opt.contacto}</td>
                                    <td className="py-3 px-4">{opt.emp_telefono}</td>
                                    <td className="py-3 px-4">{opt.emp_email}</td>
                                    <td className="py-3 px-4">{opt.cto_telefono}</td>
                                    <td className="py-3 px-4">{opt.cto_email}</td>
                                    <td className="py-3 px-4">{opt.tipo_cliente}</td>









                                    <td className="py-3 px-4">
                                        <span
                                            className={`py-1 px-3 rounded-full text-white ${opt.estado === "1"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                                }`}
                                        >
                                            {opt.estado === "1" ? "Activo" : "Inactivo"}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <Icon.edit
                                            className="style-icon-header"
                                            size={25}
                                            onClick={() => handleEdit(opt)}
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>


            <div className="mt-4 flex justify-between items-center gap-5">
                <strong className="flex gap-2">
                    Clientes:{" "}
                    <p className="px-2 rounded-md bg-slate-200">{cantidad}</p>
                </strong>
            </div>


            <Modal
                key={modalKey}
                open={openModal}
                footer={null}
                onCancel={() => setOpenModal(false)}
                centered
                width={800}
                afterClose={afterClose}
                title={
                    <div className="flex justify-center">
                        {data ? "Editar" : "Crear"} cliente
                    </div>
                }
            >
                <ModalCliente data={data} onClose={() => handleOnClose()} />
            </Modal>
        </div>
    );
};

export default CustomerTable;
