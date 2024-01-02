



// WeakMap
// La primera diferencia con Map es que en WeakMap las claves deben ser objetos, no valores primitivos:

let weakMap = new WeakMap()

let obj = {

}

weakMap.set(obj,'key')

// no puede usar un string como clave
// weakMap.set("test", "Whoops"); // Error, porque "test" no es un objeto