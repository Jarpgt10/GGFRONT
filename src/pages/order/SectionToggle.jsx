import React, { useState } from 'react';
import Icon from '@utilities/Icon';

export default function SectionToggle({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="mb-5">
            <div
                className="bg-[#56646f] rounded-md px-2 text-white flex items-center gap-5 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                {isOpen ? <Icon.arrowDown /> : <Icon.arrowUp />}
            </div>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
            >
                {children}
            </div>
        </section>
    );
}
