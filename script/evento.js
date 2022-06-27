

let formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const cliente = document.querySelector('#cliente').value;
    const documento = document.querySelector('#documento').value;
    const fechaPartida = document.querySelector('#fechaPartida').value;
    const fechaRetorno = document.querySelector('#fechaRetorno').value;
    const tipoDocumento = document.querySelector('#tipoDocumento').value;
    const comentario = document.querySelector('#comentario').value;
    const Destino = document.querySelector('#nomDestino').value;
    

    
    
    if (cliente == "" ||  documento == "" || fechaPartida == "" || fechaRetorno === ""){
        
        Swal.fire(
            'Error!',
            'No debe haber datos vacíos!',
            'error'
          )
    }else{
        Swal.fire(
            'Éxito!',
            '!Excelente, llenaste el formulario!',
            'success'
          )
    } 
    
    let solicitud ={
        cliente,
        tipoDocumento,
        documento,
        fechaPartida,
        fechaRetorno,
        comentario,        
        }
        console.log(solicitud)
        
})



