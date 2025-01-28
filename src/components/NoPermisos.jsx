import React from 'react';

const NoPermisos = ({ mensaje = 'No tienes permisos para ver esta sección.' }) => {
    return (
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 text-center">
                {mensaje}
            </h2>
        </div>
    );
};

export default NoPermisos;
