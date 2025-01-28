import React from 'react'
import SectionToggle from './SectionToggle'
import { Form, Switch } from 'antd'

export default function DeliverySection() {
    return (
        <>
            <Form.Item label='Envio' name='delivery'>
                <Switch
                    checkedChildren='SI'
                    unCheckedChildren='NO'
                    disabled={false}
                />
            </Form.Item>
        </>
    )
}
