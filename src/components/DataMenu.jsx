import { MAINTENANCE, ORDER, PRIVATE } from '../router/path';
import Icon from "../utilities/Icon";

const DataMenu = [
    {
        id_menu: 1,
        name: 'Inicio',
        icon: <Icon.home size={20} />,
        url: PRIVATE,
    },
    {
        id_menu: 2,
        name: 'Mantenimiento',
        icon: <Icon.config size={20} />,
        url: MAINTENANCE,
    },
    {
        id_menu: 3,
        name: 'Orden',
        icon: <Icon.book size={20} />,
        url: ORDER,
    },
]


export default DataMenu;