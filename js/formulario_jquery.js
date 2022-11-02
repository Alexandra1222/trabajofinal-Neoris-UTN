


/* PARA HACER LA VALIDACION DE LOS CAMPOS DEL FORMULARIO */
window.addEventListener('load',()=>{
    let validadorFormulario = new FormValidator('registration',[{
         name: 'nombre',
         display:'nombre',
         rules: 'required|min_length[10]'
    },
    {
        name: 'numero_telefono',
        display:'Numero del cliente',
        rules: 'required|valid_number_phone' 
    },
    {
        name: 'email_cliente',
        display:'Email del Cliente',
        rules: 'required|valid_email' 
    },
    {
        name: 'pedido',
        display:'escribe el pedido que cotizas',
        rules: 'required|min_length[2]' 
    },
    {
        name: 'numero_platos',
        display:'Numero de platos a cotizar',
        rules: 'required|valid_number' 
    },
    {
        name: 'detalle_pedido',
        display:'Escribí aquí mas detalles sobre tu pedido y nos contactaremos con vos!',
        rules: 'required|min_length[5]' 
    }], function(errores,evento){
        if(errores.length){
            let mensaje='';
            errores.forEach(function(campo,indice,arreglo){
                mensaje += `${campo.message} <br/>`;
            });

            document.querySelector('#resultadoValidacion').innerHTML = mensaje;
        }
    })
});

