import { request } from '@utilities/request'
const path = 'api/controllers/usuario.php?'

export const httpGetUsuario = async (estado = 'NULL') => {
    const result = await request(`${path}get-usuario=true&estado=${estado}`,)
    return JSON.parse(result)
}

export const httpAddOrUpdateUsuario = async (body) => {
    const result = await request(`${path}add-or-update-usuario=true`, {
        method: 'POST',
        body
    })
    return JSON.parse(result)
}


export const httpGetRol = async (estado = 'NULL') => {
    const result = await request(`${path}get-rol=true&estado=${estado}`,)
    return JSON.parse(result)
}

export const httpAddOrUpdateRol = async (body) => {
    const result = await request(`${path}add-or-update-rol=true`, {
        method: 'POST',
        body
    })
    return JSON.parse(result)
}


export const httpResetPassword = async (id_usuario = 0) => {
    const result = await request(`${path}reset-password=true&id_usuario=${id_usuario}`,)
    return JSON.parse(result)
}


