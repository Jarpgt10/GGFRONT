import React, { useContext, useState } from 'react';
import { PrivateContext } from '@context/PrivateContex';
import { Form, Input, Select, Switch, Button, message } from 'antd';

import { httpAddOrUpdateUsuario } from '@services/usuario';

export default function ModalUsuario({ data, onClose }) {
    const { puesto, roles } = useContext(PrivateContext);


    const initialValues = {
        ...data,
        id_usuario: data && parseInt(data.id_usuario) || 0,
        estado: data && data.estado == '1' ? true : false,
    };


    const handleSubmit = async (values) => {
        const SendData = {
            ...initialValues,
            ...values,
            estado: values.estado ? 1 : 0,
        };



        await httpAddOrUpdateUsuario(SendData).then((res) => {
            if (!res.err) {
                message.success(res.msg);
            } else {
                message.error(res.msg);
            }
        }).finally(onClose());
    };

    return (
        <Form initialValues={initialValues} onFinish={handleSubmit}>
            <Form.Item name='nombre_completo' label='Nombre completo' rules={[{ required: true, message: 'Ingrese el nombre completo' }]}>
                <Input maxLength={99} />
            </Form.Item>

            <Form.Item name='usuario' label='Usuario' rules={[{ required: true, message: 'Ingrese el usuario' }]}>
                <Input maxLength={49} />
            </Form.Item>

            <Form.Item name='id_rol_usuario' label='Rol' rules={[{ required: true, message: 'Seleccione un Rol' }]}>
                <Select>
                    {roles.map((item, index) => (
                        <>
                            <Select.Option key={index} value={item.id_rol_usuario}>
                                {item.rol_usuario}
                            </Select.Option>
                        </>
                    ))}
                </Select>
            </Form.Item>


            <Form.Item name='id_puesto' label='Puesto' rules={[{ required: true, message: 'Seleccione un puesto' }]}>
                <Select>
                    {puesto.map((item, index) => (
                        <Select.Option key={index} value={item.id_puesto}>
                            {item.puesto}
                        </Select.Option>

                    ))}


                </Select>
            </Form.Item>

            <Form.Item label='Estado' name='estado' rules={[{ required: true, message: 'Seleccione el estado' }]}>
                <Switch checkedChildren='Activo' unCheckedChildren='Inactivo' />
            </Form.Item>

            <div className='flex justify-end'>
                <Button className='border-2 rounded-md border-gray-200' type='text' htmlType='submit'>
                    Guardar
                </Button>
            </div>
        </Form>
    );
}
