const {promedio, argv} = require('./datos.js');
const express = require('express')
const app = express()

console.log(argv);

if (argv._[0] == 'promedio') {
    //console.log('El promedio de ' + argv.n + 'es' + promedio(argv.p,argv.i,argv.m));
    res = promedio(argv.p,argv.i,argv.m);
    texto = 'El promedio de ' + argv.n + ' es ' + res;
}
else {
    console.log(' Promedio no calculado ');
}


 
app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)