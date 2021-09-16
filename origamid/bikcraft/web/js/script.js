if(window.SimpleSlide){
  new SimpleSlide({
    slide: 'principal', // nome do atributo data-slide=""
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
  
});
  new SimpleSlide({
    slide: 'portfolio-fotos', // nome do atributo data-slide=""
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
    nav: true
});
}
if(window.SimpleAnime) {
  new SimpleAnime();
}

if(window.SimpleForm) {
new SimpleForm({
  form: ".formphp",
  button: "#enviar",
  erro:"<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>",
  sucesso:"<div id='form-sucesso'><h2>Formulario enviado com sucesso!</h2><p>Em breve entraremos em contato.</p></div>",
});
}