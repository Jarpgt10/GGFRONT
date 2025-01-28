import { request } from '@utilities/request'
const path = 'api/controllers/orden.php?'


export const httpGetOrderState = async (estado = 'NULL') => {
    const result = await request(`${path}get-order-state=true&estado=${estado}`,)
    return JSON.parse(result);
}



export const httpGetOrden = async (estado = 'NULL') => {
    const result = await request(`${path}get-orden=true&estado=${estado}`,)
    return JSON.parse(result);
}


export const httpAddOrUpdateOrden = async (body) => {
    const result = await request(`${path}add-or-update-orden=true`, {
        method: 'POST',
        body
    })
    return JSON.parse(result);
}

export const httpSaveObservacion = async (body) => {
    const result = await request(`${path}save-observacion=true`, {
        method: 'POST',
        body
    })
    return JSON.parse(result);
}


export const httpNextStepOrder = async (body) => {
    const result = await request(`${path}next-step-orden=true`, {
        method: 'POST',
        body
    })
    return JSON.parse(result);
}

