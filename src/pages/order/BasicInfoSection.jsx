import React from 'react';
import { Form, Input, Select, Switch } from 'antd';
import SectionToggle from './SectionToggle';

export default function BasicInfoSection({ toggleOption, TipoClienteActivo }) {
    return (
        <SectionToggle title="Datos básicos">
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 transition-all duration-500`}
            >
                <Form.Item label="Estado" name="estado" rules={[{ required: true, message: 'Ingrese el Estado' }]}>
                    <Switch checkedChildren="Activo" unCheckedChildren="Inactivo" />
                </Form.Item>
                <Form.Item
                    name="nit"
                    label="NIT"
                    initialValue="C/F"
                    rules={[{ required: true, message: 'Ingrese el NIT' }]}
                >
                    <Input maxLength={99} />
                </Form.Item>
                <Form.Item
                    name="id_tipo_cliente"
                    label="Tipo Cliente"
                    rules={[{ required: true, message: 'Ingrese el Tipo Cliente' }]}
                >
                    <Select>
                        {TipoClienteActivo.map((item, index) => (
                            <Select.Option key={index} value={item.id_tipo_cliente}>
                                {item.tipo_cliente}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </div>
        </SectionToggle>
    );
}
