function planetasFantasticos(datos){
    return datos[Math.floor(Math.random()*datos.length)]
}

let planetas=['Antares','Proxima centauri','kripton','kepler','Hubble','Arsat','Tatooine','LV-426','Pandora','Miller'];
let colores=['Amarillo','Fucsia','Turquesa','Anaranjado','Rojo', 'Negro', 'Dorado', 'Plateado'];
let elementosQuimicos=['Nitrogeno','Dioxido de carbono','Oxigeno','Azufre','Hidrogeno','Helio','Argon'];
let temperatura=['0°','20°','468°','900°','-50°','-100°','-228°'];

    
console.log(`Planeta: ${planetasFantasticos(planetas)}`)
console.log(`Color: ${planetasFantasticos(colores)}`)
console.log(`Elementos quimicos: ${planetasFantasticos(elementosQuimicos)}`)
console.log(`Temperatura media: ${planetasFantasticos(temperatura)}`)
