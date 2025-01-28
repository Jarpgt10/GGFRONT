import React, { useContext, useRef } from 'react';
import { Form, Button, Tabs } from 'antd';
import { OrderContext } from '../context/OrderContext';
import SearchBar from './SearchBar';
import CompanySection from './CompanySection';
import ItemSection from './ItemSection';
import DeliverySection from './DeliverySection';

export default function OrderInfo({ data, onClose }) {
    const { TabPane } = Tabs;
    const [form] = Form.useForm();
    const clienteRef = useRef();
    const { filterTab, dataCliente, } = useContext(OrderContext);

    const handleSubmit = async () => {
        try {

            const values = await form.validateFields();
            console.log(values);


        } catch (error) {
            console.error("Error al validar el formulario:", error);
        }
    };

    return (
        <div className="p-5 h-[70vh] w-full overflow-y-auto">

            <SearchBar clienteRef={clienteRef} form={form} />

            <Form
                form={form}
                name="cliente"
                ref={clienteRef}
                layout="vertical"
                initialValues={{ ...dataCliente, items: [] }}
                size="middle"
                disabled={filterTab < 3}
            >
                <Tabs defaultActiveKey={1} tabPosition="left">
                    <TabPane tab="Datos" key={1}>
                        <CompanySection />
                    </TabPane>
                    <TabPane tab={<span className="flex items-center gap-5">Items</span>} key={3}>
                        <ItemSection form={form} />
                    </TabPane>
                    <TabPane tab="Delivery" key={4}>
                        <DeliverySection />
                    </TabPane>
                </Tabs>
            </Form>

            <div className="col-span-full flex justify-end">
                <Button
                    className="border-2 rounded-md border-gray-200"
                    type="text"
                    onClick={handleSubmit}
                    disabled={false}
                >
                    Guardar
                </Button>
            </div>
        </div>
    );
}
