const {promedio, argv} = require('./datos.js');

console.log(argv);

if (argv._[0] == 'promedio') {
    console.log('El promedio de ' + argv.n + 'es' + promedio(argv.p,argv.i,argv.m));
}
else {
    console.log(' Promedio no calculado ');
}