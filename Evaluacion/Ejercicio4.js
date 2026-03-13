// 4 Arrays y objetos

const productos = [
    { nombre: "Gorra", precio: 100000, cantidad: 3},
    { nombre: "Pantaloneta", precio: 150000, cantidad: 2},
    { nombre: "Chaqueta", precio: 200000, cantidad: 1}
]

productos.forEach (producto => {
    const total = producto.precio * producto.cantidad

console.log("Producto:", producto.nombre)
console.log("Total:", total)
})
