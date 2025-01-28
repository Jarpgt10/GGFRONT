import React, { useState } from 'react'
import Icon from '../utilities/Icon'
import { Link } from 'react-router-dom'
import { SETTING } from '../router/path'
import ListMenu from './ListMenu';

export default function Header({ session, logout, menus }) {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='flex justify-between items-center px-5 gap-5 '>
            <div className='flex justify-center items-center gap-5'>
                <div className='block md:hidden'>
                    <div className="relative">
                        <div className="z-50 fixed top-6 left-3 cursor-pointer">
                            {toggle
                                ? <Icon.close size={30} onClick={() => setToggle(!toggle)} />
                                : <Icon.menu size={30} onClick={() => setToggle(!toggle)} />
                            }
                        </div>

                        <div className={`fixed top-0 left-0 w-full h-full bg-gray-300 z-40 ${toggle ? '' : 'hidden'}`}>
                            <div className="flex flex-col justify-center items-center h-full">

                                {menus && menus.map((item, index) => (
                                    <ListMenu key={index} id={item.id_menu} icon={item.icon} link={item.url} name={item.name} />
                                ))}

                            </div>
                        </div>
                    </div>



                </div>
                <div className='flex flex-col text-sm '>
                    <strong>
                        {session.nombre_completo}
                    </strong>
                    <span>{session.usuario}</span>

                </div>
            </div>

            <div className='flex justify-center items-center gap-5'>
                <Link to={SETTING}>
                    <Icon.user size={20} className='style-icon-header' />
                </Link>
                <Icon.bell size={20} className='style-icon-header' />

                <Icon.off size={20} className='style-icon-header' onClick={() => logout()} />
            </div>


        </div >
    )
}
