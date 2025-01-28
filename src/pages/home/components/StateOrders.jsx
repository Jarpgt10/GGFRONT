import React, { useContext } from 'react';
import { PrivateContext } from '@context/PrivateContex';

export default function StateOrders() {
    const { orden } = useContext(PrivateContext);

    // Contar la cantidad de órdenes por `estado_orden`
    const ordersCount = orden.reduce((acc, order) => {
        const id = order.estado_orden;
        acc[id] = (acc[id] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className='py-5 px-6 w-full rounded-lg bg-white shadow-lg text-gray-800'>
            <h2 className='text-xl font-bold mb-4'>Estados de Órdenes</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {Object.entries(ordersCount).map(([estado, count]) => (
                    <div
                        key={estado}
                        className='flex items-center justify-between bg-gray-100 rounded-lg shadow p-4 hover:bg-gray-200 transition duration-200'
                    >
                        <span className='text-sm font-medium text-gray-600'>{estado}</span>
                        <span className='text-xs font-bold bg-blue-500 text-white px-3 py-1 rounded-full'>
                            {count}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
