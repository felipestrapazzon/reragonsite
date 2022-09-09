console.log(document);

var formulario = document.querySelector('form')
var paragrafo = document.createElement('p')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    
    const serviceID = "service_6cuopyg";
    const templateID = "template_rwok12z";

    // send the email here
    emailjs.sendForm("service_6cuopyg", "template_rwok12z", this).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Seu formulario foi enviado!!!");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Algo de errado aconteceu...", error);
      }
    );

    var dados =  new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')
    console.log(nome, email, turma, motivo, mensagem)
}) 



