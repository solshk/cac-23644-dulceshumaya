// HEADER
const hamburguesa = document.querySelector(".menu__hamburguesa");
const cruz = document.querySelector(".hamburguesa__cruz");
const menuLista = document.querySelector(".menu__lista");

hamburguesa.addEventListener("click", () => {
    hamburguesa.classList.toggle("active");
    cruz.classList.toggle("active");
    menuLista.classList.toggle("active");
}); 

cruz.addEventListener("click", () => {
    hamburguesa.classList.toggle("active");
    cruz.classList.toggle("active");
    menuLista.classList.toggle("active");
}); 


//FETCH

const btnAnterior = document.querySelector("#btnAnterior");
const btnSiguiente = document.querySelector("#btnSiguiente");

const cargarRecetas = async () => {
    try {
        const respuesta = await fetch("https://sazonapi.hymsoft.repl.co/api/v1/recipies");
                
        if (respuesta.status === 200) {
          const datos = await respuesta.json();

          console.log(datos);

          let recetas = "";

          datos.data.forEach((receta) => {
            recetas += `
                <div class="receta">
                    <div class="receta__img__contenedor">
                        <img class="receta__img" src="${receta.imagen}">
                    </div>        
                    <div class="receta__contenido">
                        <h3 class="receta__titulo">${receta.nombre}</h3>
                        <p class="receta__texto">${receta.descripcion_tipo}</p>
                        <button class="receta__btn">PREPARACIÓN</button>
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
 

// let pagina = 1;

// btnAnterior.addEventListener("click", () => {
//     if (pagina > 1) {
//         pagina -= 1;
//         cargarPeliculas();
//    } 
// });

// btnSiguiente.addEventListener("click", () => {
//   if (pagina < 100) {
//     pagina += 1;
//     cargarPeliculas();
//   }
// });