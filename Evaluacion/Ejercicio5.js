// Crear una Promesa y consumir con: async / await y tambien con .then()

function consultarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 3, 
                nombre: "Bryan",
                activo: true
            })
        }, 2000)
    })
}

async function obtenerUsuario() {
    const usuario = await consultarUsuario();
    console.log(usuario);
}

obtenerUsuario();
