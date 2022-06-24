

export function mostrarDes(dest, container){ 
    container.innerHTML =""
        dest.forEach((element) => {
            let { imagen, lugar, id} =element
            container.innerHTML += `<img id="imgDes" src=${imagen}>`
            container.innerHTML +=`<h2 id= "nomLugar">${lugar}</h2>` 
            container.innerHTML +=`<a id="linkDetalle" href= "/destinos.html" name =${id}>Ver más</a>`               
            
        });
    }





    // export function mostrarDes(dest, container){ 
    //     container.innerHTML =""
    //     dest.forEach((element) => {
    //         let { imagen, lugar } =element
    //         container.innerHTML += `<img id="imgDes" src=${imagen}>`
    //         container.innerHTML +=`<a id="linkDetalle" href= "./paginas/index2.html">Ver más</a>`  
    //         container.innerHTML +=`<h2 id= "nomLugar">${lugar}</h2>`                    
    //         console.log(imagen)
            
    //     });
    // } 











    
    // destinos.forEach((destino) => {
        // // contenedor.innerHTML = ""
        // const div = document.createElement("div");
        // div.classList.add("card");
        // div.style.width="30rem";
        // console.log(div)

        
    // });


// }

        // <div class="card" style="width: 30rem;">
        //     <img src="./imagenes/2_img_asia.webp" class="card-img-top " alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title text-center">Destino</h5>
        //       <a href="#" class="btn d-block m-auto btn-outline-success">Ver más</a>
        //     </div>
        // </div>       