// Plugin whatsapp
$(document).ready(function () {
  $('.floating-wpp').floatingWhatsApp({
    phone: '5491111111111',
    popupMessage: '¡Bienvenide a Burger Company!, ¿en qué te podemos ayudar?',
    showPopup: true,
    position: 'right',
    headerTitle: 'Chat de WhatsApp',
    headerColor: '#25D366',
    backgroundColor: '#25D366'
  });
});


// Plugin owl Carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1000,
  stagePadding: 50,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})


// Plugin de 3D 
if ($(".project").length) {
  $(".project").hover3d({
    selector: ".project__card",
    shine: true,
  });
}

// Carrito
$(document).ready(function () {
  for (let i = 0; i < productos.length; i++) {
$("#productos").append(
  '<div class="col-12 col-md-6 col-xl-4 mb-4">' +
    '<div class="card sc-product-item h-100 producto-card">' + // agregada clase 'producto-card'
      '<img data-name="product_image" src="img/productos/' + productos[i].Imagen + '" class="card-img-top" alt="' + productos[i].Nombre + '">' +
      '<div class="card-body d-flex flex-column">' +
        '<h5 data-name="product_name" class="card-title producto-title">' + productos[i].Nombre + '</h5>' + // agregada clase 'producto-title'
        '<p data-name="product_desc" class="card-text producto-desc">' + productos[i].Descripcion + '</p>' +
        '<p class="card-text fw-bold">$' + productos[i].Precio + '</p>' +
        '<input name="product_price" value="' + productos[i].Precio + '" type="hidden" />' +
        '<input name="product_id" value="' + productos[i].ID + '" type="hidden" />' +
        '<button class="sc-add-to-cart btn btn-warning mt-auto">Agregar</button>' +
      '</div>' +
    '</div>' +
  '</div>'
    );
  }

  // Inicializa SmartCart en #smartcart
  $('#smartcart').smartCart({
    cartItemTemplate:
      '<div class="d-flex align-items-center gap-2 py-2">' +
      '<img src="{product_image}" class="sc-img img-thumbnail" style="width:60px;height:auto;">' +
      '<span class="sc-name">{product_name}</span>' +
      '</div>',
    lang: {
      cartTitle: "Tu pedido",
      checkout: 'Pedir',
      clear: 'Borrar',
      subtotal: 'Subtotal:',
      cartRemove: 'x',
      cartEmpty: 'Nada en tu carrito.<br>Elige tus productos!',
    }
  });

});


// Validación formulario 
(() => {
  'use strict';

  const form = document.querySelector('#contactForm');

  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); // evitar envío real, mostrar alert de demo
      alert('¡Tu mensaje ha sido enviado!, en la brevedad nos estaremos contactando.');
      form.reset();
      form.classList.remove('was-validated');
      return;
    }
    form.classList.add('was-validated');
  }, false);
})();


// Flipsterr
$(function(){
  var coverflow = $("#coverflow").flipster();
});


