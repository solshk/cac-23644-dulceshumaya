//FETCH

const cargarRecetas = async () => {
    try {
        const respuesta = await fetch("https://sazonapi.hymsoft.repl.co/api/v1/recipies");
                
        if (respuesta.status === 200) {
          const datos = await respuesta.json();

          console.log(datos);

          let recetas = "";

          datos.data.forEach((receta) => {
            recetas += `
            <div class="carousel-item active">
              <div class="card h-100" style="width: 18rem;">
                <div class="card-wrapper">
                  <img src="${receta.imagen}" class="card-img-top receta__img" alt="${receta.nombre}">
                </div>
 
                <div class="card-body">
                  <h5>${receta.nombre}</h5>
                  <p>${receta.descripcion_tipo}</p>
                  <button id="btn__marroncito">Ver receta</button>
                </div>
              </div>  
            </div>  
            `;
          });

          document.getElementById("contenedor-recetas").innerHTML = recetas;
        } else if (respuesta.status === 401) {
          console.log("key incorrecta");
        } else if (respuesta.status === 404) {
          console.log("no disponible");
        } else {
          console.log("no tengo idea del error");
        }

    } catch (error) {
        console.log(error.message)
    }
}

cargarRecetas();
 