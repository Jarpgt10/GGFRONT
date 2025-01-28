import React, { useContext, useState } from 'react';
import Avatar from '../assets/Avatar.webp';
import { Link } from 'react-router-dom';
import { PrivateContext } from '../context/PrivateContex';

export default function SideBar({ menus }) {
    const { PRIVATEFUNCTIONS } = useContext(PrivateContext);
    const [toggle, setToggle] = useState(true);

    return (


        <div
            className={`mx-5 bg-white shadow-lg flex flex-col transition-all duration-500 ease-in-out ${toggle ? 'w-[80px] rounded-2xl' : 'w-[60px] rounded-full -translate-y-[100%]'} shadow-md shadow-[#00000061]`}
        >
            <div className={`flex flex-col items-center ${toggle ? '' : 'hidden'}`}>
                {menus.map((opt) => (
                    <Link to={opt.url} key={opt.id_menu}>
                        <div
                            className=" p-3 mt-5  rounded-xl bg-[#f0f0f0] hover:bg-[#e0e0e0] transition-all duration-300 ease-in-out"
                            onClick={() => PRIVATEFUNCTIONS.changeMenu(opt.id_menu)}
                        >
                            <div className="text-center text-xl">{opt.icon}</div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center mt-auto py-2">
                <div
                    className={`flex justify-center items-center p-1 rounded-full cursor-pointer transition-all duration-300 ${toggle ? 'w-[50px]' : 'w-[45px]'}`}
                    onClick={() => setToggle(!toggle)}
                >
                    <img src={Avatar} alt="Avatar" className={`rounded-full transition-transform duration-300 ${toggle ? 'scale-100' : 'scale-110'}`} />
                </div>
            </div>
        </div>

    );
}
