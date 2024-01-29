function bandasAleatorias(datos){
    return datos[Math.floor(Math.random()*datos.length)]
}

let objeptos=['Los peces',,'Los kiwis','Tiburones','Perro','Los corderitos', 'Los pericos','Los duendes','Metales','Los caballeros'];
let colores=['amarillos','fucsias','turquesas','anaranjados','rojos', 'negros', 'dorados', 'plateados','oscuros',''];

console.log(`${bandasAleatorias(objeptos)} ${bandasAleatorias(colores)}`)