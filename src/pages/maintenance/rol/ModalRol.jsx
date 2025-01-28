import React, { useState } from 'react';
import InitialPermisos from './InitialPermisos';
import { Button, Divider, Form, Input, Switch, message } from 'antd';
import { httpAddOrUpdateRol } from '@services/usuario';

export default function ModalRol({ data, onClose }) {
    // Estado para los permisos dinámicos
    const [permisos, setPermisos] = useState(
        data && data.rol_permiso ? JSON.parse(data.rol_permiso) : InitialPermisos
    );

    const initialValues = {
        ...data,
        id_rol_usuario: (data && parseInt(data.id_rol_usuario)) || 0,
        estado: data && data.estado === '1' ? true : false,
        rol_permiso: permisos,
    };
    console.log(initialValues);


    // Actualizar permisos cuando se cambia el estado del switch
    const handlePermisoChange = (checked, index) => {
        const updatedPermisos = [...permisos];
        updatedPermisos[index].value = checked;
        setPermisos(updatedPermisos);
    };

    const handleSubmit = async (values) => {
        const SendData = {
            ...initialValues,
            ...values,
            estado: values.estado ? 1 : 0,
            rol_permiso: permisos, // Arreglo de permisos actualizado
        };

        console.log(SendData);


        await httpAddOrUpdateRol(SendData).then((res) => {
            if (!res.err) {
                message.success(res.msg);
            } else {
                message.error(res.msg);
            }
        }).finally(onClose());
    };

    return (
        <Form onFinish={handleSubmit} initialValues={initialValues}>
            <Form.Item name='rol_usuario' label='Rol' rules={[{ required: true, message: 'Ingrese Rol' }]}>
                <Input />
            </Form.Item>
            <Form.Item label='Estado' name='estado'>
                <Switch
                    checkedChildren='Activo'
                    unCheckedChildren='Inactivo'
                />
            </Form.Item>
            <Divider>Permisos</Divider>
            <div className='flex'>
                {permisos.map((opt, index) => (
                    <Form.Item key={index} label={opt.name}>
                        <Switch
                            checked={opt.value}
                            onChange={(checked) => handlePermisoChange(checked, index)}
                            checkedChildren='Activo'
                            unCheckedChildren='Inactivo'
                        />
                    </Form.Item>
                ))}
            </div>


            <div className='flex justify-end'>
                <Button className='border-2 rounded-md border-gray-200' type='text' htmlType='submit'>
                    Guardar
                </Button>
            </div>
        </Form>
    );
}
