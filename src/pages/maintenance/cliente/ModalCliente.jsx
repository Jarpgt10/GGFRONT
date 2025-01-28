import React, { useContext, useState } from 'react'
import { Form, InputNumber, message, Switch, Button, Input, Select, Divider } from 'antd';
import { PrivateContext } from '@context/PrivateContex';
import { httpAddOrUpdateCliente } from '@services/cliente';
import { replaceUndefinedWithNull } from '@utilities/obj';

export default function ModalCliente({ data, onClose }) {
    const { tipoCliente } = useContext(PrivateContext);
    const TipoClienteActivo = tipoCliente.filter(item => item.estado == 1);
    const [toggle, setToggle] = useState({
        empresa: false,
        contacto: false,
    });

    const initialValues = replaceUndefinedWithNull({
        ...data,
        id_cliente: data && parseInt(data.id_cliente) || 0,
        estado: data && parseInt(data.estado) === 1 ? true : false,
    });

    const handleSubmit = async (values) => {


        const SendData = replaceUndefinedWithNull({
            ...initialValues,
            ...values,
            estado: values.estado ? 1 : 0,
        })


        await httpAddOrUpdateCliente(SendData).then((res) => {
            if (!res.err) {
                message.success(res.msg);
            } else {
                message.error(res.msg);
            }
        }).finally(onClose());
    }


    return (
        <div className='h-[60vh] w-full overflow-y-auto'>
            <Form
                layout='vertical'
                initialValues={initialValues}
                onFinish={handleSubmit}
            >
                <Divider > <span className='bg-[#56646f] rounded-md px-2 text-white'>Datos basicos</span></Divider>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Form.Item label='Estado' name='estado' rules={[{ required: true, message: 'Ingrese el Estado' }]}>
                        <Switch checkedChildren='Activo' unCheckedChildren='Inactivo' />
                    </Form.Item>
                    <Form.Item name='nit' label='NIT' initialValue='C/F' rules={[{ required: true, message: 'Ingrese el NIT' }]}>
                        <Input maxLength={99} />
                    </Form.Item>
                    <Form.Item name='id_tipo_cliente' label='Tipo Cliente' rules={[{ required: true, message: 'Ingrese el Tipo Cliente' }]}>
                        <Select>
                            {TipoClienteActivo.map((item, index) => (
                                <Select.Option key={index} value={item.id_tipo_cliente}>
                                    {item.tipo_cliente}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>
                {/* EMPRESA */}
                <Divider> <span className='bg-[#56646f] rounded-md px-2 text-white'>Empresa</span></Divider>
                {/* EMPRESA */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                    <Form.Item name='empresa' label='Empresa' className='col-span-1' >
                        <Input maxLength={99} />
                    </Form.Item>
                    <Form.Item name='emp_email' label='Email empresa' className='col-span-1'>
                        <Input maxLength={99} type='email' />
                    </Form.Item>
                    <Form.Item name='emp_telefono' label='Telefono Empresa' rules={[
                        { pattern: /^\d+$/, message: 'Solo se permiten números' }
                    ]}>
                        <Input maxLength={8} />
                    </Form.Item>
                    <Form.Item name='direccion' label='Dirección' className='col-span-full'>
                        <Input.TextArea maxLength={150} />
                    </Form.Item>
                </div>
                <Divider > <span className='bg-[#56646f] rounded-md px-2 text-white'>Contacto / Cliente</span></Divider>

                {/* CONTACTO */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <Form.Item name='contacto' label='Nombre' rules={[{ required: true, message: 'Ingrese el nombre contacto' }]} className='col-span-1'>
                        <Input maxLength={99} />
                    </Form.Item>
                    <Form.Item name='cto_telefono' label='Tel/Cel' rules={[
                        { required: true, message: 'Ingrese el Teléfono' },
                        { pattern: /^\d+$/, message: 'Solo se permiten números' }
                    ]}>
                        <Input maxLength={8} />
                    </Form.Item>
                    <Form.Item name='cto_email' label='Email' className='col-span1' rules={[{ required: true, message: 'Ingrese el Email' }]}>
                        <Input maxLength={99} type='email' />
                    </Form.Item>
                </div>

                <div className='col-span-full flex justify-end'>
                    <Button className='border-2 rounded-md border-gray-200' type='text' htmlType='submit'>
                        Guardar
                    </Button>
                </div>
            </Form>

        </div>
    )
}
