


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


/* PARA CREAR EL PDF */
    /* LABELS */
    
    let lNombre = document.getElementById('lbnombre').innerText;
    let lNumero = document.getElementById('lbnumero').innerText;
    let lEmail = document.getElementById('lbemail').innerText;
    let lPedido = document.getElementById('lbpedido').innerText;
    let lDetallePedido = document.getElementById('lbdetalles_pedido').innerText;
    let lHora = document.getElementById('lbhora').innerText;
    let lDireccion = document.getElementById('lbdireccion').innerText;
    
    /* INPUTS */
    let inombre = document.getElementById('nombre').value;
    let inumero = document.getElementById('numero_telefono').value;
    let iemail = document.getElementById('email_cliente').value;
    let iplatos = document.getElementById('numero_platos').value;
    let idetalle = document.getElementById('detalle_pedido').value;
    let ihora = document.getElementById('hora').value;
    let idireccion = document.getElementById('direccion').value;
    /* INFO PARA EL PDF */

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(lNombre + '' + inombre, 10, 20);
    doc.text(lNumero + '' + inumero, 10, 30);
    doc.text(lEmail + '' + iemail, 10, 40);
    doc.text(lPedido + '' + iplatos, 10, 50);
    doc.text(lDetallePedido + '' + idetalle, 10, 60);
    doc.text(lHora + '' + ihora, 10, 70);
    doc.text(lDireccion + '' + idireccion, 10, 80);
    doc.save("pedido_a_cotizar.pdf");

    

    

   




