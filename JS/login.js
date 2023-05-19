//REcuperando o input após ele receber o focus
const inputPass = document.querySelector('input[name="txtSenha"]');
const inputUser = document.querySelector('input[type="text"]')
const LUser = document.querySelector('label[for="idNm"]')
const LabelPass = document.querySelector('label[for="idSenha"]')
// inputUser.addEventListener('focus',()=>{
//     inputUser.setAttribute("style",'outline-color:#ff0000;'); 
// })

inputUser.addEventListener('keyup',()=>{
    
    if(inputUser.value.length < 5){
        inputUser.setAttribute('style','outline-color:#ff0000;'); 
        LUser.setAttribute('style','color:#ff0000;'); 

    }else{
        inputUser.setAttribute('style','outline-color:#00ff00;');
        LUser.setAttribute('style','color:#00ff00;'); 
    }
   
    
       
})

const eyepass = document.querySelector('.fa-eye')

eyepass.addEventListener('click',()=>{
    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");

    }else{
        inputPass.setAttribute("type","password");
    }
})
let usuario1 = {
    nomeCompleto : "José das Couves",
    nomeUsuario : "jose",
    senhaUsuario: "123456"
}

let usuario2 = {
    nomeCompleto : "Paulo Cabuloso",
    nomeUsuario : "popo",
    senhaUsuario: "123456"
}

let usuario3 = {
    nomeCompleto : "Edulado Violao",
    nomeUsuario : "dudu",
    senhaUsuario: "123456,
    
addEventListener("click", (evt)=>{

    if (evt.target.id == "btnSubmit") {
        
        const usuarioLogado = {
            NomeUsuaraioLogado: imputUser.valeu
            SenhaUsuaraioLogado: imputPass.valeu
        }
        
    }


    /*Criando uma intereção para vaidar a lista de objetos com o objeto de usuario validando */

    
            if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario){
                msgStatus.setAttribute("style","color:#00ff00");
                msgStatus.innerHTML = `<span><strong>O usuário ${usuario.nomeCompleto} realizou o login com SUCESSO!!</strong></span>`
            }

        });

    }
});



