import React, { useContext } from 'react';
import { Form, Input, Select } from 'antd';
import SectionToggle from './SectionToggle';
import { PrivateContext } from '@context/PrivateContex';

export default function CompanySection() {
    const { tipoCliente } = useContext(PrivateContext);
    const TipoClienteActivo = tipoCliente.filter(item => item.estado == 1);
    return (
        // <SectionToggle title="Empresa">
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
                <Form.Item name='id_tipo_cliente' label='Tipo Cliente' rules={[{ required: true, message: 'Ingrese el Tipo Cliente' }]}>
                    <Select>
                        {TipoClienteActivo.map((item, index) => (
                            <Select.Option key={index} value={item.id_tipo_cliente}>
                                {item.tipo_cliente}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="contacto"
                    label="Nombre"
                    rules={[{ required: true, message: 'Ingrese el nombre contacto' }]}
                >
                    <Input maxLength={99} />
                </Form.Item>
                <Form.Item
                    name="cto_telefono"
                    label="Tel/Cel"
                    rules={[
                        { required: true, message: 'Ingrese el Teléfono' },
                        { pattern: /^\d+$/, message: 'Solo se permiten números' },
                    ]}
                >
                    <Input maxLength={8} />
                </Form.Item>
                <Form.Item
                    name="cto_email"
                    label="Email"
                    rules={[{ required: true, message: 'Ingrese el Email' }]}
                >
                    <Input maxLength={99} type="email" />
                </Form.Item>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <Form.Item name="empresa" label="Empresa">
                    <Input maxLength={99} />
                </Form.Item>
                <Form.Item name="emp_email" label="Email empresa">
                    <Input maxLength={99} type="email" />
                </Form.Item>
                <Form.Item
                    name="emp_telefono"
                    label="Teléfono Empresa"
                    rules={[{ pattern: /^\d+$/, message: 'Solo se permiten números' }]}
                >
                    <Input maxLength={8} />
                </Form.Item>
                <Form.Item name="direccion" label="Dirección" className="col-span-3">
                    <Input.TextArea maxLength={150} />
                </Form.Item>
            </div>
        </>
        // </SectionToggle>
    );
}
