import { request } from '@utilities/request'
const path = 'api/controllers/cliente.php?'

export const httpGetTipoCliente = async (estado = 'NULL') => {
    const result = await request(`${path}get-tipo-cliente=true&estado=${estado}`,)
    return JSON.parse(result)
}

export const httpAddOrUpdateTipoCliente = async (body) => {
    const result = await request(`${path}add-or-update-tipo-cliente=true`, {
        method: 'POST',
        body
    })
    return JSON.parse(result)
}


export const httpGetCliente = async (estado = 'NULL') => {
    const result = await request(`${path}get-cliente=true&estado=${estado}`,)
    return JSON.parse(result)
}


export const httpAddOrUpdateCliente = async (body) => {
    const result = await request(`${path}add-or-update-cliente=true`, {
        method: 'POST',
        body
    })
    return JSON.parse(result)
}



