import React from 'react';

export default function InformationList({ data }) {

    return (
        <div className="absolute top-full mt-2 right-0 z-50 
        bg-white rounded-lg shadow-lg p-4 overflow-y-auto
        md:h-[300px] lg:h-[300px] xl:h-[450px] sm:h-[335px]
        md:w-96 lg:w-96 xl:w-96 sm:w-64
        ">
            <ul>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center space-x-4 p-3 mb-2 bg-gray-50 rounded-lg shadow-sm"
                    >
                        <div
                            className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full"
                            style={{ backgroundColor: item.color }}
                        >
                            <span className="text-white font-bold text-sm">{item.alias}</span>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">{item.estado_orden}</h3>
                            <p className="text-sm text-gray-500">{item.descripcion}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

