import React, { useState } from 'react';
import { Steps, Button } from 'antd';

const { Step } = Steps;

export default function CSteps({ children, arrState, initalKey }) {

    const [current, setCurrent] = useState(initalKey - 1);

    const next = () => {
        setCurrent(prev => Math.min(prev + 1, arrState.length - 1));

    };

    // const prev = () => {
    //     setCurrent(prev => Math.max(prev - 1, 0));
    // };



    return (
        <div>
            <Steps direction="horizontal" current={current}>
                {arrState.map((step, index) => (
                    <Step key={index} title={` ${step.alias}`} />
                ))}
            </Steps>


            <div className='mt-5'>
                {children}
            </div>

            <div style={{ marginTop: 16 }}>
            </div>

        </div>
    );
}
