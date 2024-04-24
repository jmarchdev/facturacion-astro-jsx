
const globalFacturasArray = [
    {
        id: 1,
        nombre: "ejemplo1",
        fecha_registro: new Date("2022-01-11"),
        fecha_pago: new Date("2022-01-22"),
        importe: 12,
        pagada: false
    }
]; 

export function getGlobalArray() {
  return globalFacturasArray;
}

export function addToGlobalArray(item) {
  globalFacturasArray.push(item);
}

export function removeFromGlobalArray(index) {
  globalFacturasArray.splice(index, 1);
}



let globalProyectosArray = [
    {
        id: 1,
        nombre: "ejemplo1",
       
    }
]; 

export function getGlobalArrayProyectos() {
    return globalProyectosArray;
  }
  
  export function addToGlobalArrayProyectos(item) {
    globalProyectosArray.push(item);
  }
  
  export function removeFromGlobalArrayProyectos(index) {
    globalProyectosArray.splice(index, 1);
  }