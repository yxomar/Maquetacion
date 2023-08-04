//-- carrito
let carrito = [];

//-- Añadir productos al carrito
$('.product').click(function(){
    let addCart = {
        articulo: $(this).attr("title"),
        precio: $(this).attr("value")
    }
    carrito.push(addCart);
})

//-- Mostrar carrito.
function total(){
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += Number(carrito[i].precio);
    }
    //-- Visualizar Total
    $('#total').text(total.toFixed(2) + '€');
}

function printCartList(){
    //-- Visualizar lista de articulos
    let list = '';
    for (let i = 0; i < carrito.length; i++) {
        list += `<li class="list-group-item">PRENDA: ${carrito[i].articulo} ${carrito[i].precio}</li>`;
        $('.body-ul').html(list);
    }
}

$('.cart_btn').click(function(e){
    e.preventDefault();
    printCartList();
    total();
})

//-- Mostrar mensaje al pulsar el botón del carrito "comprar"
$('#buy').click((e) => {
    e.preventDefault();
    if (carrito.length != 0) {
        alert('¡Buen trabajo! Ahora eres un cliente más de nuestra tienda falsa, ¡esperamos verte de nuevo pronto (aunque en realidad no existimos)!');
    }else{
        alert('No hay ningún articulo en el carrito.')
    }
});