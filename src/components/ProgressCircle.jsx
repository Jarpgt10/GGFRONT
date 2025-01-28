import React from 'react';

const ProgressCircle = ({ progress, size = 100, strokeWidth = 10, color = 'blue' }) => {
    // Calcular el radio y la circunferencia del círculo
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // Calcular el desplazamiento de la línea de progreso
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex justify-center items-center">
            <svg
                className="transform rotate-90"
                width={size}
                height={size}
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Fondo del círculo */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                    className="text-gray-200"
                />
                {/* Progreso */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                    className={`text-${color}-500`}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: 'stroke-dashoffset 0.35s ease' }}
                />
            </svg>
            <div className="absolute text-xl font-semibold">{progress}%</div>
        </div>
    );
};

export default ProgressCircle;
