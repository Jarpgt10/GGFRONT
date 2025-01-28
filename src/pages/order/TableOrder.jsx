import React, { useContext, useState } from 'react';
import Icon from '@utilities/Icon';
import InformationList from '@components/InformationList';
import Loading from '@components/Loading';
import { Modal } from 'antd'
import ModalOrder from './ModalOrder';
import { OrderContext } from '../context/OrderContext';
import OrderInfo from './OrderInfo';


export default function TableOrder({ headers, ordenEstado, columns, loadingGlobal, reload }) {
    const { openModal, F_ORDER } = useContext(OrderContext)
    const [toggleInformacion, setToggleInformacion] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [modalKey, setModalKey] = useState(0);
    const [data, setData] = useState(null);



    if (loadingGlobal) {
        return <Loading />;
    }

    const afterClose = () => {
        setData(null);
        setModalKey(prevKey => prevKey + 1);
    };


    const handleDescription = (obj) => {
        F_ORDER.optionOpenModal({ state: true });
        setData(obj)
    }

    const handleEdit = (value) => {
        setData(value);
        F_ORDER.optionOpenModal({ edit: true });
    }

    const handleOnClose = () => {
        F_ORDER.resetOpenModal()
        reload.ordenes();
    }

    return (
        <>
            <div className="relative">
                <div className="flex justify-between items-center">
                    <div></div>
                    <div></div>
                    <div className="relative">
                        <Icon.information
                            size={25}
                            className="style-icon-header cursor-pointer"
                            onClick={() => setToggleInformacion(!toggleInformacion)}
                        />
                        {toggleInformacion && (
                            <InformationList data={ordenEstado} />
                        )}
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <div className="flex flex-col sm:flex-row justify-start  items-center mb-4 gap-2">
                    <input
                        type="text"
                        placeholder="Buscar orden..."
                        className="w-full sm:w-[80%] md:w-auto px-4 py-2 border rounded-md shadow-sm focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="flex gap-2">
                        <Icon.reload
                            onClick={() => reload.ordenes()}
                            size={25}
                            className="cursor-pointer style-icon-header"
                        />
                        <Icon.add

                            onClick={() => F_ORDER.optionOpenModal({ create: true })}
                            size={25}
                            className="cursor-pointer style-icon-header"
                        />
                    </div>
                </div>
                <table className="min-w-full bg-white shadow-md rounded-lg px-2">
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
                                opt.id_orden_trabajo.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((opt, index) => (
                                <tr key={index} className="border-t text-sm " >
                                    <td className="py-3 px-4 "># {opt.id_orden_trabajo}</td>
                                    <td className="py-3 px-4">{opt.cliente}</td>
                                    <td className="py-3 px-4">{opt.telefono}</td>
                                    <td className="py-3 px-4">{opt.fecha_creacion}</td>
                                    <td className="py-3 px-4">{opt.fecha_actualizo}</td>
                                    <td className="py-3 px-4">
                                        <span className={`py-1 px-3 rounded-full text-sm font-semibold `} style={{ color: opt.color }}>

                                            {opt.tipo_cliente}
                                        </span>
                                    </td>
                                    <td className={` py-3 px-4`} >
                                        <span className='py-1 px-3 rounded-full text-white' style={{ backgroundColor: opt.color_estado }} >
                                            {opt.estado_orden}
                                        </span>
                                    </td>

                                    <td className="py-3 px-4 flex gap-3">
                                        <Icon.edit
                                            className="style-icon-header"
                                            size={25}
                                            onClick={() => handleEdit(opt)}
                                        />
                                        <Icon.eyes
                                            className="style-icon-header"
                                            size={25}
                                            onClick={() => handleDescription(opt)}
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>


            <Modal

                key={modalKey}
                open={openModal.edit || openModal.create || openModal.state}
                footer={null}
                onCancel={() => F_ORDER.resetOpenModal()}
                afterClose={afterClose}
                width={900}



            >

                {openModal.create ? <OrderInfo data={data} onClose={handleOnClose} /> : null}
                {/* // <ModalOrder data={data} optionModal={openModal} onClose={handleOnClose} /> */}
            </Modal>

        </>

    );
}

