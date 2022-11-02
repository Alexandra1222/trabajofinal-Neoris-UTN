/* 
function pdfexport(){

    let lnombre = document.getElementById('lbnombre').innerText,
        lnumero = document.getElementById('lbnumero').innerText,
        lemail = document.getElementById('lbemail').innerText,
        lpedido = document.getElementById('lbpedido').innerText,
        lplato = document.getElementById('lbplato').innerText,
        ldetalle = document.getElementById('lbdetalles_pedido').innerText,
        lhora = document.getElementById('lbhora').innerText;
    
    let inombre = document.getElementById('nombre').value,
        inumero = document.getElementById('numero_telefono').value,
        iemail = document.getElementById('email_cliente').value,
        ipedido = document.getElementById('pedido').value,
        iplato = document.getElementById('numero_platos').value,
        idetalle = document.getElementById('detalle_pedido').value,
        ihora = document.getElementById('hora').value;
        




    let doc = new jsPDF();

    doc.setFontStyle('bold');
    doc.setFontSize(10);

    
    doc.text(lnombre + ''+ inombre, 10,20);
    doc.text(lnumero + ''+ inumero, 10,30);
    doc.text(lemail + ''+ iemail, 10,40);
    doc.text(lpedido + ''+ ipedido, 10,50);
    doc.text(lplato + ''+ iplato, 10,60);
    doc.text(ldetalle + ''+ idetalle, 10,70);
    doc.text(lhora + ''+ ihora, 10,80);


    



} */


/* https://www.youtube.com/watch?v=zmJV6VN2h2E */