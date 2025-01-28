import React, { useContext, useState, useRef } from 'react'
import { Select, Form, Input, Divider, Button, message } from "antd"
import { PrivateContext } from "@context/PrivateContex";
import { httpAddOrUpdateOrden, httpNextStepOrder, httpSaveObservacion } from '../../services/orden';
import Icon from '@utilities/Icon';
import { AuthContext } from '@context/AuthContext';
import { DiffBetweenDates, DiffByHours } from '../../utilities/dates';



// const FormCreateOrder = ({ data, onClose }) => {
//     const { tipoCliente } = useContext(PrivateContext);
//     const formRef = useRef();


//     const [toggle, setToggle] = useState({
//         informacion: true,
//         descripcion: true,

//     });

//     const initialValues = {
//         ...data,
//         id_cliente: data && parseInt(data.id_cliente) || 0,
//         eliminado: data && data.eliminado == '1' ? true : false,
//         id_estado_orden: data && parseInt(data.id_estado_orden) || 2,
//         saldo: data && parseInt(data.total ? data.total : 0) - parseInt(data.anticipo ? data.anticipo : 0),
//     };



//     const handleSubmit = async (values) => {
//         const dataSend = {
//             ...initialValues,
//             eliminado: values.eliminado == true ? 1 : 0,
//             ...values,
//         };



//         await httpAddOrUpdateOrden(dataSend).then((res) => {
//             if (!res.err) {
//                 message.success(res.msg);
//             } else {
//                 message.error(res.msg);
//             }
//         }).finally(onClose())

//     };

//     const handleChangeMonto = () => {
//         const { total, anticipo } = formRef.current.getFieldsValue();
//         const saldo = parseInt(total ? total : 0) - parseInt(anticipo ? anticipo : 0);
//         formRef.current.setFieldsValue({ saldo: saldo });
//     }


//     const handleToggle = (key) => {
//         setToggle((prevToggle) => ({
//             ...prevToggle,
//             [key]: !prevToggle[key],
//         }));
//     };

//     return (
//         <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
//             <Form
//                 layout="vertical"
//                 className="space-y-4"
//                 onFinish={handleSubmit}
//                 initialValues={data || {}}
//                 ref={formRef}
//             >
//                 {/* Información Section */}
//                 <Divider orientation="center">
//                     <span
//                         className="font-bold flex items-center justify-center gap-3 cursor-pointer text-[#56646f]"
//                         onClick={() => handleToggle('informacion')}
//                     >
//                         Información
//                         <Icon.arrowUp
//                             size={20}
//                             className={`transform transition-transform ${toggle.informacion ? 'rotate-180' : ''
//                                 }`}
//                         />
//                     </span>
//                 </Divider>
//                 <div className={`${!toggle.informacion && 'hidden'} transition-opacity`}>
//                     <Form.Item
//                         name="cliente"
//                         label="Nombre cliente"
//                         rules={[{ required: true, message: 'Ingrese nombre' }]}
//                     >
//                         <Input placeholder="Nombre completo" />
//                     </Form.Item>
//                     <div className="grid grid-cols-2 gap-4">
//                         <Form.Item
//                             name="telefono"
//                             label="Teléfono"
//                             rules={[
//                                 { required: true, message: 'Ingrese el Teléfono' },
//                                 { pattern: /^\d+$/, message: 'Solo se permiten números' },
//                             ]}
//                         >
//                             <Input maxLength={8} placeholder="Ej. 12345678" />
//                         </Form.Item>
//                         <Form.Item
//                             name="email"
//                             label="Email"
//                             rules={[{ required: true, message: 'Ingrese Email' }]}
//                         >
//                             <Input placeholder="Ej. correo@ejemplo.com" />
//                         </Form.Item>
//                     </div>
//                     <Form.Item
//                         name="direccion"
//                         label="Dirección"
//                         rules={[{ required: true, message: 'Ingrese Dirección' }]}
//                     >
//                         <Input.TextArea placeholder="Ej. Calle 123, Ciudad" />
//                     </Form.Item>
//                     <div className="grid grid-cols-3 gap-4">
//                         <Form.Item
//                             name="total"
//                             label="Total"
//                             rules={[
//                                 { required: true, message: 'Ingrese el total' },
//                                 { pattern: /^\d+$/, message: 'Solo se permiten números' },
//                             ]}
//                         >
//                             <Input placeholder="Ej. 1000" onChange={() => handleChangeMonto()} />
//                         </Form.Item>
//                         <Form.Item
//                             name="anticipo"
//                             label="Anticipo"
//                             rules={[
//                                 { required: true, message: 'Ingrese el Anticipo' },
//                                 { pattern: /^\d+$/, message: 'Solo se permiten números' },
//                             ]}
//                         >
//                             <Input placeholder="Ej. 500" onChange={() => handleChangeMonto()} />
//                         </Form.Item>
//                         <Form.Item
//                             name="saldo"
//                             label="Saldo"
//                             rules={[{ required: true, message: 'Ingrese Saldo' }]}

//                         >
//                             <Input placeholder="Ej. 500" disabled />
//                         </Form.Item>
//                     </div>
//                     <Form.Item
//                         name="id_tipo_cliente"
//                         label="Tipo cliente"
//                         rules={[{ required: true, message: 'Seleccione el tipo de cliente' }]}
//                     >
//                         <Select placeholder="Seleccione">
//                             {tipoCliente.map((item) => (
//                                 <Select.Option key={item.id_tipo_cliente} value={item.id_tipo_cliente}>
//                                     {item.tipo_cliente}
//                                 </Select.Option>
//                             ))}
//                         </Select>
//                     </Form.Item>
//                 </div>

//                 {/* Descripción Section */}
//                 <Divider orientation="center">
//                     <span
//                         className="font-bold flex items-center justify-center gap-3 cursor-pointer text-[#56646f]"
//                         onClick={() => handleToggle('descripcion')}
//                     >
//                         Descripción de la orden
//                         <Icon.arrowUp
//                             size={20}
//                             className={`transform transition-transform ${toggle.descripcion ? 'rotate-180' : ''
//                                 }`}
//                         />
//                     </span>
//                 </Divider>
//                 <div className={`${!toggle.descripcion && 'hidden'}`}>
//                     <Form.Item
//                         name="descripcion"
//                         label="Descripción"
//                         rules={[{ required: true, message: 'Ingrese Descripción' }]}
//                     >
//                         <Input.TextArea placeholder="Ej. Detalles adicionales de la orden" />
//                     </Form.Item>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="flex justify-end">
//                     <Button
//                         type="primary"
//                         htmlType="submit"
//                         className="bg-blue-600 hover:bg-blue-500 transition-colors"
//                     >
//                         Guardar
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };






const FormPrint = ({ data, onClose }) => {
    const { session } = useContext(AuthContext)
    const [isExpanded, setIsExpanded] = useState(false);
    const formRef = useRef();
    const detalle = data.detalle;

    const initialValues = {
        ...data,
    };


    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSubmit = async (values) => {
        const dataSend = {
            id_estado_orden: parseInt(initialValues.id_estado_orden) + 1,
            id_orden_trabajo: initialValues.id_orden_trabajo,
            id_usuario: session.id_usuario,
            ...values
        }

        await httpNextStepOrder(dataSend).then((res) => {
            if (!res.err) {
                message.success(res.msg);
            } else {
                message.error(res.msg);
            }
        }).finally(onClose());


    };

    const handleSave = async () => {
        const values = formRef.current.getFieldsValue();
        const dataSend = {
            id_estado_orden: initialValues.id_estado_orden,
            id_orden_trabajo: initialValues.id_orden_trabajo,
            id_usuario: session.id_usuario,
            ...values
        }

        await httpSaveObservacion(dataSend).then((res) => {
            if (!res.err) {
                message.success(res.msg);
            } else {
                message.error(res.msg);
            }
        }).finally(onClose());

    }

    console.log(data);

    return (
        <Form layout="vertical" onFinish={handleSubmit} ref={formRef} >
            <div className="bg-[#002855] w-full rounded-xl p-3 flex gap-5 mt-2">
                <div className="h-[180px] bg-[#ffffff] w-[130px] rounded-lg p-2">
                    <div className="flex justify-center items-center">
                        <Icon.time size={35} className="text-white rounded-xl p-1" style={{ backgroundColor: data.color }} />
                    </div>
                    <div className="flex justify-center items-center mt-2 text-gray-800 text-center text-base font-bold">
                        Tiempo de orden Transcurrido
                    </div>
                    <div className="flex justify-center items-center mt-2 text-gray-900 text-center text-2xl font-bold">
                        {parseInt(data.id_estado_orden) === 8
                            ? DiffBetweenDates(data.fecha_creacion, data.fecha_actualizo)
                            : DiffByHours(data.fecha_creacion)}
                    </div>

                </div>

                <div className="h-[180px] bg-[#ffffff] w-[130px] rounded-lg p-2">
                    <div className="flex justify-center items-center">
                        <Icon.time size={35} className="text-white rounded-xl p-1" style={{ backgroundColor: data.color }} />
                    </div>
                    <div className="flex justify-center items-center mt-2 text-gray-800 text-center text-base font-bold">
                        Tiempo de {data.estado_orden}
                    </div>
                    <div className="flex justify-center items-center mt-2 text-gray-900 text-center text-2xl font-bold">
                        {data.fecha_actualizo == null ? 0 : DiffByHours(data.fecha_actualizo)}
                    </div>
                </div>

                <div className="w-full h-[180px] bg-[#ffffff] rounded-lg p-2">
                    <div className="flex justify-center">
                        <strong className="text-lg text-[#002855]">Descripción</strong>
                    </div>
                    <div className="w-4/4 h-[120px] mt-1 p-2 bg-[#ffffff] rounded-lg overflow-y-auto text-[#002855] text-justify">
                        {data.descripcion}
                    </div>
                </div>
            </div>

            <section
                className={`w-full mt-2 rounded-lg bg-white p-4 shadow-md overflow-y-auto mb-2 transition-all duration-300 ${isExpanded ? 'h-[450px]' : 'h-[250px]'}`}
            >
                <div className="h-full space-y-4">
                    <div className="flex justify-end">
                        <Icon.eyes size={20} className="style-icon-header cursor-pointer" onClick={handleToggle} />
                    </div>
                    {detalle.map((item, index) => (
                        <div key={index} className="flex flex-col space-y-1">
                            {/* Línea de tiempo */}
                            <div className="relative flex items-center">
                                <div className="w-3 h-3 bg-[#FFD100] rounded-full z-10"></div>
                                <div className="absolute left-1.5 top-0.5 h-full w-0.5 bg-gray-300"></div>
                            </div>
                            {/* Contenido */}
                            <div
                                className={`ml-6 p-4 rounded-lg shadow ${item.nombre_usuario === "Informaticas" ? "bg-[#002855] text-white" : "bg-gray-100 text-black"}`}
                            >
                                <div className="text-sm font-semibold">
                                    {item.nombre_usuario}
                                </div>
                                <div className="text-xs text-gray-400">{item.estado_orden}</div>
                                <p className="mt-1 text-sm">{item.observacion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>






            {parseInt(data.id_estado_orden) < 8 && (
                <>
                    {/* Observación */}
                    <Form.Item name="observacion" label="Observacion" rules={[{ required: true, message: "Ingrese una observación" }]}>
                        <Input.TextArea placeholder="Ingrese observación" />
                    </Form.Item>
                    <div className="flex justify-end mt-5 gap-5">

                        <Button type="default" htmlType="button" className="bg-[#002855] text-white hover:bg-[#001f38]" onClick={() => handleSave()}>
                            Guardar
                        </Button>
                        <Button type="default" htmlType="submit" className="bg-[#002855] text-white hover:bg-[#001f38]">
                            Siguiente paso
                        </Button>

                    </div>
                </>
            )
            }


        </Form >
    );
};


export { FormPrint }