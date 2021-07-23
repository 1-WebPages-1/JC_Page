/* Menu */
document.querySelector('.M-Icon-Container').addEventListener('click', () => {
    document.querySelector('.nav-container').classList.toggle('show')
});



/* Cookies */
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');


dataLayer = [];

if (!localStorage.getItem('cookies-aceptadas'))
{
  avisoCookies.classList.add('activo');
  fondoAvisoCookies.classList.add('activo');
} else {
  dataLayer.push({'event': 'cookies-aceptadas'})
}

botonAceptarCookies.addEventListener('click', () => {
  avisoCookies.classList.remove('activo');
  fondoAvisoCookies.classList.remove('activo');

  localStorage.setItem('cookies-aceptadas', true);

  dataLayer.push({'event': 'cookies-aceptadas'});
});


/* Btn de facebook */
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "101922521938025");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v11.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



