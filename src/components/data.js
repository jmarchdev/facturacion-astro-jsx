
let globalFacturasArray = [
    {
        id: 1,
        nombre: "ejemplo1",
        fecha_registro: "111",
        fecha_pago: "122",
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
