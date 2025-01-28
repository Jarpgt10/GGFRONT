import React, { useContext } from 'react';
import SideBar from '@components/SideBar';
import { AuthContext } from '@context/AuthContext';
import DataMenu from './DataMenu';
import Header from './Header';
import { PrivateContext } from '@context/PrivateContex';
import Loading from './Loading';


export default function Layout({ children }) {
    const { session, logout, loadingGlobal } = useContext(AuthContext);

    if (loadingGlobal) {
        return <Loading />;
    }

    const filteredDataMenu = DataMenu.filter((item) => {
        return session && session.permisos && session.permisos.some((permission) => parseInt(permission.id_menu) === item.id_menu);
    });

    return (
        <>
            <div className='sm:grid sm:grid-cols-1 sm:grid-rows-[auto,1fr] md:flex bg-color'>
                {/* barra de menu*/}
                <div className='flex flex-col justify-center '>
                    {filteredDataMenu &&
                        (<div className='hidden md:block '>
                            <SideBar menus={filteredDataMenu} />
                        </div>)}
                </div>
                <div className={`bg-color w-full h-screen`}>
                    {/* Header */}
                    <div className='sm:col-span-1  sm:mx-[2.5%]  md:ml-[0%] md:mr-[2%] mt-[1.5%] md:mt-[1%]  p-3 h-[65px] bg-gray-50 rounded-md shadow-md shadow-[#00000061]'>
                        {session && <Header session={session} logout={logout} menus={filteredDataMenu} />}
                    </div>

                    {/* continer principal */}
                    <div className='sm:col-span-1 sm:mx-[2.5%] md:ml-[0%] md:mr-[2%] mt-[1.5%] sm:h-[90%] md:h-[85%] lg:h-[83%] shadow-md shadow-[#00000061]'>
                        <div className='bg-gray-50 h-full rounded-md px-9 py-5'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
