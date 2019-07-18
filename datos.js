const opciones = {
    nombre:{
        alias: 'n',
        demand:true
    },
    matematicas:{
        default:0,
        alias: 'm'
    },
    ingles:{
        default:0,
        alias: 'i'
    },
    progrmacion:{
        //default:0,
        demand: true,
        alias: 'p'
    }
}

let promedio = (n1,n2,n3) => {
    (n1+n2+n3)/3;
}

const argv = require('yargs')
             .command('promedio','Calcular el promedio', opciones)
             .argv

module.exports = {
    promedio,
    argv
};