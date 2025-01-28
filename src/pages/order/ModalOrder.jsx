import React from 'react'
import CSteps from '@components/CSteps'
import { useContext } from 'react'
import { PrivateContext } from '@context/PrivateContex'

// import { FormCreateOrder, FormPrint } from './Grids';
import { httpAddOrUpdateOrden, httpNextStepOrder } from '../../services/orden';
import OrderInfo from './OrderInfo';


export default function ModalOrder({ data = null, optionModal, onClose }) {
    const { ordenEstado } = useContext(PrivateContext);
    const InitialKey = parseInt(data?.id_estado_orden) || 1;

    const FUNCTION = {
        addOrUpdateOrder: () => httpAddOrUpdateOrden(),
        stepOrder: () => httpNextStepOrder(),
    }

    const handleClose = () => {
        onClose();
    }


    return (
        <>
            <div className='px-2 py-5'>
                {/* <CSteps arrState={ordenEstado} initalKey={InitialKey} > */}
                {/* {data && <strong>{data.estado_orden}</strong>} */}
                {/* {InitialKey < 2 ? (<FormCreateOrder FUNCTION={FUNCTION} data={data} />) : (<FormPrint />)} */}

                {optionModal.create ? <OrderInfo />
                    : null}

                {/* {optionModal.create && <FormCreateOrder FUNCTION={FUNCTION} data={data} onClose={handleClose} />} */}
                {/* {optionModal.edit && <FormCreateOrder FUNCTION={FUNCTION} data={data} onClose={handleClose} />}
                    {optionModal.state && <FormPrint data={data} onClose={handleClose} />} */}
                {/* </CSteps> */}
            </div>
        </>
    )
}
