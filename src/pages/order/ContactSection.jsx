import React from 'react';
import { Form, Input } from 'antd';
import SectionToggle from './SectionToggle';

export default function ContactSection() {
    return (
        // <SectionToggle title="Contacto / Cliente">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        // </SectionToggle>
    );
}
