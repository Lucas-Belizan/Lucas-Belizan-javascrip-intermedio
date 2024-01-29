function historiAbsurda(datos) {
    return datos[Math.floor(Math.random() * datos.length)]
}

let objeptos = ['dinosaurio', 'pinguino', 'robot', 'tiburon', 'perro', 'chancho','oso'];
let objeptos2=['ovejas','plantas','aliens','jirafas','ballenas'];
let objeptos3=['nubes','estrellas'];
let regalo=['una manta','una playstation 5','un libro','un almanaque','un alfajor','un auto','un tonner','una rueda'];
let acciones=['jugar','hacer ejercicio','nadar','correr','manejar','dormir','comer'];
let lugar=['plaza','ruta','pileta','terraza','ciudad','laguna','Luna','base aerea'];
let lugar2=['la montaña','la estacion del tren','la panaderia','la cancha'];
let colores=['amariila','naranja','rojiza','verde','azul','violeta'];
let camino=['tierra','asfalto','empedrados','agua','oscuridad'];
let lugares3=['del caribe','del desierto','de Qatar','de Greolandia']


console.log(`Habia una vez un ${historiAbsurda(objeptos)} que le gustaba ${historiAbsurda(acciones)} en la ${historiAbsurda(lugar)}, se encontro con dos ${historiAbsurda(objeptos2)} que se habian perdido y le preguntaron si sabia donde quedaba ${historiAbsurda(lugar2)} mas cercana. Les indico que debian seguir el camino de ${historiAbsurda(camino)} y luego seguir las ${historiAbsurda(objeptos3)} de color ${historiAbsurda(colores)}. En agradecimiento le dio ${historiAbsurda(regalo)} para soportar el frio polar ${historiAbsurda(lugares3)}.`);