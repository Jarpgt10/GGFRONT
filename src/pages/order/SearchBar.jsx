import React, { useContext } from 'react';
import { Radio, Input, message } from 'antd';
import Icon from '@utilities/Icon';
import { OrderContext } from '../context/OrderContext';
import { PrivateContext } from '@context/PrivateContex';

export default function SearchBar({ clienteRef, form }) {
    const { F_ORDER, filterTab } = useContext(OrderContext);
    const { cliente } = useContext(PrivateContext);


    const handleChange = (e) => {
        if (clienteRef.current) clienteRef.current.resetFields?.()

        F_ORDER.changeFilterTab(e.target.value);
        form.resetFields();
        F_ORDER.setcliente(null); // Borra el cliente seleccionado
    };


    const handleSearch = (e) => {
        if (e.target.value === 'C/F') return message.error('No se puede filtrar por C/F');

        const client =
            filterTab === 1
                ? cliente.find(item => item.nit === e.target.value)
                : filterTab === 2
                    ? cliente.find(item => item.cto_telefono === e.target.value)
                    : null;

        if (client) {
            // Actualiza el cliente en el contexto con los valores obtenidos
            F_ORDER.setcliente(client);

            // Actualiza el formulario reflejando los valores del cliente
            clienteRef.current?.setFieldsValue(client);
        } else {
            message.error('No se encuentra información');
        }
    };


    return (
        <>
            <Radio.Group
                onChange={handleChange}
                value={filterTab}
                optionType="button"
                className="flex justify-center"
                buttonStyle="solid"
            >
                <Radio value={1}>Nit</Radio>
                <Radio value={2}>Contacto</Radio>
                <Radio value={3}>Nuevo</Radio>
            </Radio.Group>
            <div className="flex flex-col items-center gap-5 my-5">
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-1 py-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                    {filterTab === 1 && (
                        <>
                            <Input
                                placeholder="Ingrese nit"
                                className="border-none outline-none flex-1 text-gray-700"
                                size='small'
                                onPressEnter={handleSearch}
                            />
                            <Icon.search size={24} className="text-gray-500" />
                        </>
                    )}
                    {filterTab === 2 && (
                        <>
                            <Input
                                placeholder="Ingrese Teléfono"
                                maxLength={8}
                                className="border-none outline-none flex-1 text-gray-700"
                                size='small'
                                onPressEnter={handleSearch}

                            />
                            <Icon.search size={24} className="text-gray-500" />
                        </>
                    )}
                    {filterTab === 3 && (<strong className='text-gray-500 px-2 '> Ingrese nuevo cliente </strong>)}
                </div>

            </div>
        </>
    );
}
