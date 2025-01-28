import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

export default function ItemSection({ form }) {
    const [items, setItems] = useState([{ descripcion: '', cantidad: 0, precio: 0, total_item: 0 }]);

    const handleAddItem = (add) => {
        const newItem = { descripcion: '', cantidad: 0, precio: 0, total_item: 0 };
        add(newItem);
        const updatedItems = [...items, newItem];
        setItems(updatedItems);

    };

    const handleRemoveItem = (index, remove) => {
        remove(index);
        const updatedItems = items.filter((_, idx) => idx !== index);
        setItems(updatedItems);

    };

    const handleValuesChange = () => {
        const allValues = form.getFieldValue('items') || [];
        const updatedItems = allValues.map((item) => {
            const total = (item.cantidad || 0) * (item.precio || 0); // Calcular total
            return { ...item, total_item: total };
        });
        form.setFieldsValue({ items: updatedItems }); // Actualizar valores del formulario
    };
    return (
        <Form.List name="items">
            {(fields, { add, remove }) => (
                <>
                    {fields.map(({ key, name, }) => (
                        <div
                            key={key}
                            className="flex items-center justify-between gap-5 border p-4 rounded-lg shadow-sm bg-white"
                        >
                            <Space direction="vertical" className="flex flex-wrap gap-5 w-full">
                                <div className="flex gap-5 w-full">
                                    <Form.Item
                                        label="Descripción"
                                        name={[name, 'descripcion']}

                                        rules={[{ required: true, message: 'Falta' }]}
                                        className="w-1/4"
                                    >
                                        <Input disabled={false} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Cantidad"
                                        name={[name, 'cantidad']}

                                        rules={[{ required: true, message: 'Falta' }]}
                                        className="w-1/4"
                                    >
                                        <InputNumber
                                            min={0}
                                            onChange={() => handleValuesChange()}
                                            className="w-full"
                                            disabled={false}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Precio"
                                        name={[name, 'precio']}

                                        rules={[{ required: true, message: 'Falta' }]}
                                        className="w-1/4"
                                    >
                                        <InputNumber
                                            min={0}
                                            step={0.1}
                                            onChange={() => handleValuesChange()}
                                            className="w-full"
                                            disabled={false}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Total"
                                        name={[name, 'total_item']}

                                        className="w-1/4"
                                    >
                                        <InputNumber disabled className="w-full" />
                                    </Form.Item>
                                </div>
                            </Space>
                            <Button
                                type="dashed"
                                icon={<MinusCircleOutlined />}
                                onClick={() => handleRemoveItem(name, remove)}
                                className="ml-4"
                                disabled={false}
                            >
                                Eliminar Item
                            </Button>
                        </div>
                    ))}
                    <Button
                        htmlType="button"
                        type="dashed"
                        icon={<PlusOutlined />}
                        className="mt-4 w-full"
                        onClick={() => handleAddItem(add)}
                        disabled={false}
                    >
                        Agregar Item
                    </Button>
                </>
            )}
        </Form.List>
    );
}
