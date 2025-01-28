import { request } from '@utilities/request'
const path = 'api/controllers/puesto.php?'

export const httpGetPuesto = async (estado = 'NULL') => {
    const result = await request(`${path}get-puesto=true&estado=${estado}`,)
    return JSON.parse(result)
}

export const httpAddOrUpdatePuesto = async (body) => {
    const result = await request(`${path}add-or-update-puesto=true`, {
        method: 'POST',
        body
    })
    return JSON.parse(result)
}



