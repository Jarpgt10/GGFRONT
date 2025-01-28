import React from 'react'
import SectionToggle from './SectionToggle'
import { Form, InputNumber, Switch } from 'antd'

export default function DeliverySection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">

            <Form.Item label='Envio' name='delivery'>
                <Switch
                    checkedChildren='SI'
                    unCheckedChildren='NO'
                    disabled={false}
                />
            </Form.Item>

            <Form.Item label='Total' name='total'>
                <InputNumber />
            </Form.Item>

            <Form.Item label='Abono' name='Abono'>
                <InputNumber />
            </Form.Item>

            <Form.Item label='Saldo' name='saldo'>
                <InputNumber />
            </Form.Item>
        </div>
    )
}
