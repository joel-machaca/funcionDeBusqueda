const contenedor=document.getElementById('main-card')
productos.forEach(producto=>{
    const div=document.createElement("div");
    div.className="card col-md-4 mx-4 text-center"
    div.style.width="18rem"
    div.innerHTML=`
            <img src="${producto.imagen}" class="card-img-top mt-3" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">S/ ${producto.precio}</p>
                <button href="#" class="btn btn-dark">Go somewhere</button>
            </div>`
    contenedor.appendChild(div)
})

// funcion de busqueda

const buscando=(x)=>{
    const encontrado=productos.filter(producto=>{
        return producto.titulo.toLowerCase().includes(x.toLowerCase())
    })
    return encontrado
}

const buscarButton=()=>{
    const InputSearch=document.getElementById('queBuscar').value;
    const resultado=buscando(InputSearch)
    
    if (resultado.length > 0) {
        let mensaje="Resultado encontrados:\n\n"
        resultado.forEach(plato=>{
            mensaje +=`Nombre:${plato.titulo}\nPrecio:${plato.precio}\n----------------------------------------------------------\n`
        })
        alert(mensaje)
    }else{
        alert("lo sentimos producto no encontrado")
    }
}

