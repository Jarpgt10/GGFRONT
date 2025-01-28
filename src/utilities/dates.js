import dayjs from 'dayjs';

const DiffByHours = (fechaInicio) => {
    // Convertir la fecha inicial y la fecha actual en objetos Day.js
    const fechaInicial = dayjs(fechaInicio);
    const fechaActual = dayjs();

    // Calcular la diferencia total en minutos
    const diferenciaTotalMinutos = fechaActual.diff(fechaInicial, 'minute');

    // Obtener las horas y minutos
    const horas = Math.floor(diferenciaTotalMinutos / 60);
    const minutos = diferenciaTotalMinutos % 60;

    return `${horas}:${minutos}`;
}

const DiffBetweenDates = (fechaInicio, fechaFin) => {
    // Convertir las fechas de inicio y fin en objetos Day.js
    const fechaInicial = dayjs(fechaInicio);
    const fechaFinal = dayjs(fechaFin);

    // Calcular la diferencia total en minutos
    const diferenciaTotalMinutos = fechaFinal.diff(fechaInicial, 'minute');

    // Obtener las horas y minutos
    const horas = Math.floor(diferenciaTotalMinutos / 60);
    const minutos = diferenciaTotalMinutos % 60;

    return `${horas}:${minutos}`;
};



export { DiffByHours, DiffBetweenDates }


