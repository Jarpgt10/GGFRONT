import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Form } from 'antd'

export default function Setting() {

    const { session } = useContext(AuthContext);



    return (
        <div className='h-full'>
            <Form>
                <div className='bg-slate-100 w-[150px] rounded-md'>
                    <img src={session.url_img} alt='usuario imagen' loading='lazy' className='w-[150px] rounded-full' />
                </div>

            </Form>




        </div >
    )
}
