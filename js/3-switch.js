//  solicitar al usuasrio que elija un dia de la semana y segun el dia ofrecerle un menu

const dia = prompt('seleccione un dia de la semana: 1-lunes, 2-miercoles, 3-viernes');
console.log(dia);
console.log(dia.toLowerCase());
console.log(dia.toUpperCase());
// modificar el contenido de dia a minisculas 
dias = dia.toLowerCase();

switch(dia){
    case 'lunes':
    case '1':
        document.write(`<h2>Menu del Lunes</h2>
            <ul>
                <li>Plato principal:Milanesa Napolitana</li>
                <li>Bebida: Coca-Cola</li>
                <li>Postre: Flan </li>
            </ul>
            `);
            break;
    case '2':
        document.write(`<h2>Menu del Lunes</h2>
            <ul>
                <li>Plato principal:Hamburguesas</li>
                <li>Bebida: Sprite</li>
                <li>Postre:Helado </li>
            </ul>
            `);
            break;
    case '3':
        document.write(`<h2>Menu del Viernes</h2>
            <ul>
                <li>Plato principal:Pizza Napolitana</li>
                <li>Bebida: Cerveza</li>
                <li>Postre: Panqueque </li>
            </ul>
            `);
        break;
    default:    document.write('ingresó una opcion invalida');
}