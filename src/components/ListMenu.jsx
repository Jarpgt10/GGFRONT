import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PrivateContext } from '../context/PrivateContex'

export default function ListMenu({ id, link, name, icon }) {
    const { PRIVATEFUNCTIONS } = useContext(PrivateContext);
    return (
        <div className={` pb-2 col-start-1`}>
            <Link to={link} key={id} >
                <div className="mx-2 p-2 flex gap-3 font-semibold justify-center rounded-xl bg-primary inner-shadow bg-[#D3D3D3]  mt-5 text-white"
                    key={id} onClick={() => PRIVATEFUNCTIONS.changeMenu(id)}>
                    {icon}{name}
                </div>
            </Link>
        </div>
    )
}
