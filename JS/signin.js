//Recuperando o input após ele receber o focus
const inputUser = document.querySelector('input[type="text"]')
const LUser = document.querySelector('label[for="usuario"]')

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
    const inputPass = document.querySelector('input[id="senha"]');
    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");

    }else{
        inputPass.setAttribute("type","password");
    }
})
