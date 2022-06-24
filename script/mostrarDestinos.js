import { lugares } from "./data.js";
import {mostrarDes} from '../script/imprimir.js'
let container = document.getElementById('container'); 
let mostrarDestinos = document.getElementById(''); 


document.addEventListener('click',({target}) => {    
        let respuesta =  target.id    
          
        let destinos =  lugares.filter( c => c.continente === respuesta)

        localStorage.setItem('destinos', JSON.stringify(destinos));
        let dest =   JSON.parse(localStorage.getItem('destinos'));
        // console.log(dest)
        mostrarDes(dest, container)
    })     
    let dest =   JSON.parse(localStorage.getItem('destinos'));
    mostrarDes(dest, container)































    // const  printp = (destinos,div) => {
        
    //     destinos.forEach(destino => {
            
    //         const div = document.createElement('div');
    //         div.classList.add('card');
    //         div.style.width='30rem'


    //         const img = document.createElement("img");
    //         img.classList.add("card-img-top ");
    //         img.setAttribute('src', destinos.imagen);


    //         const div2 = document.createElement("div");
    //         div2.setAttribute("class", "card-body");
            

    //         const h5 = document.createElement("h5");
    //         h5.classList.add("card-title text-center");
    //         h5.textContent = destinos.lugar;

    //         const a1 = document.createElement("a");
    //         a1.classList.add("btn d-block m-auto btn-outline-success");
    //         a1.textContent = 'Ver más';


    //         div.appendChild(img);
    //         div2.appendChild(h5);
    //         div2.appendChild(a1);
    //         div.appendChild(div2);          
            
    //     });
    //     }

