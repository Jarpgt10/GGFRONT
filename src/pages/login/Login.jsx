import React, { useContext } from 'react';
import GuateGrafik from '@assets/Grafik.png';
import { Button, Form, Input, message } from 'antd';
import { AuthContext } from '@context/AuthContext';
import { encryptPassword } from '@utilities/Crypto';
import { httpLogin } from '@services/login';

export default function Login() {
    const { login } = useContext(AuthContext);

    const handleSubmit = async (values) => {
        const data = {
            ...values,
            contrasena: encryptPassword(values.contrasena),
        };

        await httpLogin(data).then((res) => {
            if (!res.err) {
                login(res.token, res.usuario);
            } else {
                message.error(res.message);
            }
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f6f6f6]">
            <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg border border-[#e0e0e0]">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={GuateGrafik} alt="logo GuateGrafik" loading="lazy" className="w-24" />
                </div>

                {/* Form */}
                <Form onFinish={handleSubmit}>
                    <Form.Item
                        name="usuario"
                        rules={[{ required: true, message: 'Por favor ingrese su usuario!' }]}
                    >
                        <Input
                            placeholder="Usuario"
                            className="rounded-full border-[#e0e0e0] bg-[#f9f9f9] focus:ring-2 focus:ring-[#ffc602]"
                        />
                    </Form.Item>

                    <Form.Item
                        name="contrasena"
                        rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
                    >
                        <Input.Password
                            placeholder="Contraseña"
                            className="rounded-full border-[#e0e0e0] bg-[#f9f9f9] focus:ring-2 focus:ring-[#ffc602]"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className="w-full text-white bg-[#001d49] hover:bg-[#00234d] rounded-full"
                            type="primary"
                            htmlType="submit"
                        >
                            ENTRAR
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
