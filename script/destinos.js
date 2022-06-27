// import {mostrarDestinos} from './mostrarDestinos.js'
import {lugares} from './data.js'


    let vermas = 0;
    let dest2 = ""

    document.addEventListener('click',({target}) => {  
        vermas =  target.name
        let filtrado = lugares.find(f => f.id == vermas);
        localStorage.setItem('filtrado',JSON.stringify(filtrado));
        // let dest2  =   JSON.parse(localStorage.getItem('filtrado'));
        let lugarDestino = dest2.lugar;        
        })

        let destinoFinal = JSON.parse(localStorage.getItem('filtrado'));


        document.querySelector('#nomDestino').innerHTML= destinoFinal.lugar;

        document.querySelector('#imagenDestino').setAttribute( 'src',  destinoFinal.imagen);

       let continenteDestino = destinoFinal.continente;
        let imagenContinente=""
       switch (continenteDestino) {
        case "africa":
            continenteDestino="Africa";
            imagenContinente='../imagenes/AFRICA.png';

          break;

        case "europa":
            continenteDestino="Europa";
            imagenContinente='../imagenes/EUROPA.png';
           break;

        case "oceania":
            continenteDestino= "Oceanía"
            imagenContinente='../imagenes/OCEANIA.png';
            break;

        case "asia":
            continenteDestino="Asia"
            imagenContinente='../imagenes/ASIA.png';
          break;

        case "america":
            continenteDestino="América"
            imagenContinente='../imagenes/AMERICA.png';
           break;
      }  
        // alert(continenteDestino)
        document.querySelector('#continenteDestino').innerHTML= destinoFinal.descripcion;
        document.querySelector('#imagenContinente').setAttribute('src',imagenContinente);

        document.querySelector('#inputDestino').setAttribute('placeholder',destinoFinal.lugar);
        document.querySelector('#inputContinente').setAttribute('placeholder',continenteDestino);

        document.querySelector('#inputDestino').setAttribute('placeholder',destinoFinal.lugar);
        document.querySelector('#inputContinente').setAttribute('placeholder',continenteDestino);
        


     

    

    
 
    
 
    
        
    









// let imgDestino = document.querySelector('#imglugares');
// function mostrarDestinos(datos){
//     data.forEach(element => {
//         const{imagen} =imagen
//         console.log(imagen)
//         imgDestino.setAttribute('src', imagen)

//     });
// }
// mostrarDestinos(lugares)



// function mostrarDestinos (data,imagen){
//     container.innerHTML =" ";
//     data.innerHTML((element) => {
//         container.forEach((element) => {
//             const{imagen} = element
//             imagen.setAttribute('src',imagen)
            
//         });
//     }
//     )



