import React, { useState } from 'react';
import { FiGrid, FiUsers, FiSettings, FiDollarSign, FiArrowRightCircle } from 'react-icons/fi'; // Importa algunos íconos de react-icons

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            {/* Header de Tabs */}
            <div className="flex justify-start space-x-8 bg-gray-100 px-6 py-2">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`flex items-center space-x-2 pb-2 transition-colors duration-300 ${activeTab === index ? 'text-black font-semibold border-b-2 border-red-500' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Contenido del Tab Activo */}
            <div className="mt-4 p-4 border-t rounded-b-lg bg-white shadow-md">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

