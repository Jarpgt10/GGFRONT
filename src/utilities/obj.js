const replaceUndefinedWithNull = (obj) => {
    const result = { ...obj }; // Crear una copia para evitar mutaciones
    for (let key in result) {
        if (result[key] === undefined || result[key] === null) {
            result[key] = '';
        }
    }
    return result;
}



export { replaceUndefinedWithNull }