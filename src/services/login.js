import { request } from '@utilities/request'
const path = 'api/controllers/login.php?'

export const httpLogin = async (body) => {
    const result = await request(`${path}login=true`, {
        method: 'POST',
        body,
    })
    return JSON.parse(result)
}

export const httpGetUserData = async (body) => {
    const result = await request(`${path}get-data-user=true`, {
        method: 'POST',
        body,
    })
    return JSON.parse(result)
}
