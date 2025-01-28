import React, { useContext } from 'react'
import Icon from '@utilities/Icon'
import { PrivateContext } from '@context/PrivateContex'

export default function Customers() {
    const { cliente } = useContext(PrivateContext)
    const cantClient = cliente && cliente.length;
    return (
        <section className='p-2 w-[100%] h-[55%] rounded-lg  bg-white shadow-md shadow-[#56646f60] text-[#3b82f6] font-semibold flex justify-between items-center px-5'>
            <div><Icon.user /></div><div>Clientes</div><div>{cantClient}</div>
        </section>
    )
}
