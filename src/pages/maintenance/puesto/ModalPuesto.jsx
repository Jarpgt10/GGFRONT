import { Button, Form, Input, message, Switch } from 'antd';
import React from 'react'
import { httpAddOrUpdatePuesto } from '@services/puestos';

export default function ModalPuesto({ data, onClose }) {

    const initialValues = {
        ...data,
        id_puesto: data && parseInt(data.id_puesto) || 0,
        estado: data && data.estado == '1' ? true : false,
    };

    const handleSubmit = async (values) => {
        const SendData = {
            ...initialValues,
            ...values,
            estado: values.estado ? 1 : 0,
        }
        await httpAddOrUpdatePuesto(SendData).then((res) => {
            if (!res.err) {
                message.success(res.msg);
            } else {
                message.error(res.msg);
            }
        }).finally(onClose())
    }

    return (
        <div>
            <Form initialValues={initialValues} onFinish={handleSubmit}>
                <Form.Item name='puesto' label='Puesto' rules={[{ required: true, message: 'Ingrese el puesto' }]}>
                    <Input maxLength={99} />
                </Form.Item>
                <Form.Item
                    label='Estado'
                    name='estado'
                    rules={[{ required: true, message: 'Ingrese Costo Detalle' }]}>
                    <Switch checkedChildren='Activo' unCheckedChildren='Inactivo' />
                </Form.Item>
                < div className='flex justify-end' >
                    <Button className='border-2 rounded-md border-gray-200' type='text' htmlType='submit'>
                        Guardar
                    </Button>
                </div >
            </Form>
        </div>
    )
}
