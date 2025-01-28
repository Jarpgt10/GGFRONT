import { Form, ColorPicker, Input, Switch, Button, message } from 'antd';
import React, { useState } from 'react';
import { httpAddOrUpdateTipoCliente } from '@services/cliente';

export default function ModalTipoCliente({ data, onClose }) {
    const [colorHex, setColorHex] = useState(data ? data.color : '#000000');

    const initialValues = {
        ...data,
        id_tipo_cliente: (data && parseInt(data.id_tipo_cliente)) || 0,
        estado: data && data.estado === '1' ? true : false,
        color: data ? data.color : '#000000',
    };

    const handleColorChange = (value) => {
        setColorHex(value);
    };

    const handleSubmit = async (values) => {
        const DataSend = {
            ...initialValues,
            ...values,
            color: colorHex,
            estado: values.estado ? 1 : 0,
        }

        await httpAddOrUpdateTipoCliente(DataSend).then((res) => {
            if (!res.err) {
                message.success(res.msg);
            } else {
                message.error(res.msg);
            }
        }).finally(onClose())

    };

    return (
        <Form initialValues={initialValues} onFinish={handleSubmit}>
            <Form.Item
                label='Tipo cliente'
                name='tipo_cliente'
                rules={[{ required: true, message: 'Ingrese el tipo cliente' }]}
            >
                <Input maxLength={49} />
            </Form.Item>
            <Form.Item label='Seleccione un color' name='color'>
                <ColorPicker
                    format="hex"
                    onChange={(color) => handleColorChange(color.toHexString())}
                />
            </Form.Item>
            <Form.Item
                label='Estado'
                name='estado'
                rules={[{ required: true, message: 'Ingrese Costo Detalle' }]}
            >
                <Switch checkedChildren='Activo' unCheckedChildren='Inactivo' />
            </Form.Item>
            <div className='flex justify-end'>
                <Button
                    className='border-2 rounded-md border-gray-200'
                    type='text'
                    htmlType='submit'
                >
                    Guardar
                </Button>
            </div>
        </Form>
    );
}
