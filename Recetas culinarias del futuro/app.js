function recetas(datos){
    return datos[Math.floor(Math.random()*datos.length)]
}

let formas=['triangulo','octagonos','pentadecagono','kiliágono (polígono de 1000 lados)','angulos de 167,8°'];
let objeptos=['las zandias','las aloe veras','la carne de Godzilla','las manzanas prohibidas'];
let objeptos2=['el polvo Lunar','la sal de Marte'];
let maquinas=['acelerador de particulas','horno de materia oscura','microondas de rayos de gammas'];
let tiempo=['un minuto','10 milisegundos','33 nanosegundos',' 2 segundos'];
let refrigeracion=['refrigerador de nitrogeno','frizzer de Neon'];
let temperatura=['-230°','-100°','0°'];




console.log('Receta futurista:')
console.log(`1. Cortar en ${recetas(formas)} y colocar en un bol ${recetas(objeptos)} .`)
console.log(`2. Luego, añade ${recetas(objeptos2)} en el bol y remueve lentamente.`)
console.log(`3. Dejar levar por unos ${recetas(tiempo)}.`)
console.log(`4. Mete el bol en el ${recetas(maquinas)} durante ${recetas(tiempo)} a potencia media.`)
console.log(`5. Dejar que se enfríe y colocarlo en el ${recetas(refrigeracion)} a ${recetas(temperatura)}.`)