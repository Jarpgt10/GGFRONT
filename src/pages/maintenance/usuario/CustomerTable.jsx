import React, { useState } from "react";
import Icon from "@utilities/Icon";
import { Button, message, Modal } from "antd";
import ModalUsuario from "./ModalUsuario";
import { httpResetPassword } from "../../../services/usuario";


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
        reload.usuarios();
    };

    const handleOnClose = () => {
        setOpenModal(false);

    };

    const handleReset = async (id) => {
        await httpResetPassword(id).then((res) => {
            if (!res.err) {
                message.success(res.msg);
            } else {
                message.error(res.msg);
            }
        });
    }

    return (
        <div className="p-4 bg-[#f6f7f8] rounded-md shadow-[#00000026] shadow-sm">
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
                        onClick={() => reload.usuarios()}
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
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="text-[#c6c6c8]">
                        <tr>
                            {headers.map((header, index) => (
                                <th className="py-2 px-4 text-left" key={index}>
                                    {header.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {columns
                            .filter((opt) =>
                                opt.usuario.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((opt, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-3 px-4">
                                        <img src={opt.url_img} width={35} className="rounded-full" />
                                    </td>
                                    <td className="py-3 px-4">{opt.rol_usuario}</td>
                                    <td className="py-3 px-4">{opt.puesto}</td>
                                    <td className="py-3 px-4">{opt.usuario}</td>
                                    <td className="py-3 px-4">{opt.nombre_completo}</td>
                                    <td className="py-3 px-4">{opt.fecha_creacion}</td>
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
                                        <Button onClick={() => handleReset(opt.id_usuario)}>Restablecer</Button>
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
                    Tipos cliente:
                    <p className="px-2 rounded-md bg-slate-200">{cantidad}</p>
                </strong>
            </div>

            <Modal
                key={modalKey}
                open={openModal}
                footer={null}
                onCancel={() => setOpenModal(false)}
                width={600}
                centered
                afterClose={afterClose}
                title={<div className="flex justify-center">{data ? "Editar" : "Crear"} usuario</div>}
            >
                <ModalUsuario data={data} onClose={() => handleOnClose()} />
            </Modal>
        </div>
    );
};

export default CustomerTable;
