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
            <div class="swiper-slide d-flex justify-content-center">
              <div class="card h-100">
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
 
//SWIPER
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  direction: "horizontal",
  loop: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    2560: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});