function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Shayari copied!");
}
function shareWhatsApp(text) {
  window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(text));
}console.log( "Hello World!" );