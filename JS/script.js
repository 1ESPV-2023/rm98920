// function mudaCor () {
    
// let r = 0
// let g = 0
// let b = 0

// //Math 
// r = Math.ceil(Math.random() * 255)
// g = Math.ceil(Math.random() * 255)
// b = Math.ceil(Math.random() * 255)

// const elementos = [...document.getElementsByClassName()];

//     elementos.forEach((cab)=>{
//         cab.style.backgroundColor = `rgb(${r},${g},${b})`

//     })
//     tmp = setTimeout(mudaCor,100);
// }

// mudaCor()
// mudaBanner1();


// function mudaBanner1() {
    
//     let banner1 = "./img/banner-1440x300-1.jpg";
    

//     const elImg = document.querySelector(".cabecalho > img");
//     elImg.src = banner1;
    
//     setTimeout(mudaBanner2, 2000);
// }

// function mudaBanner2() {
       
//     let banner2 = "./img/banner-1440x300-2.jpg";
//     const elImg = document.querySelector(".cabecalho > img");
//     elImg.src = banner2;    
//     setTimeout(mudaBanner3, 2000);
// }

// function mudaBanner3() {
    
    
//     let banner2 = "./img/banner-1440x300-3.jpg";    
//     const elImg = document.querySelector(".cabecalho > img");
//     elImg.src = banner3;    
//     setTimeout(mudaBanner1, 2000);
// }

function mudaBanner1() {

    let num1 = Math.ceil(Math.random()*3);
    let num2 = Math.ceil(Math.random()*3);

    let CaminhoImg1 = `./img/banner-lateral-${num1}.png`;
    let CaminhoImg2 = `./img/banner-lateral-${num2}.png`;

    const b1 = document.querySelector(".banner-1 img");
    const b2 = document.querySelector(".banner-2 img");

    b1.src = CaminhoImg1;
    b2.src = CaminhoImg2;
    setTimeout(mudaBanner1 , 1000)
    
}
function acender() {

    
    const gif1 = document.querySelector(".conteudo img");
    const botao = document.querySelector(".botao");
    
    if(botao.textContent == "Ligar"){
        gif1.src = "./img/pic_bulbon.gif";
        botao.textContent = "Desligar";
    }else{
        gif1.src = "./img/pic_bulboff.gif";
        botao.textContent = "Ligar";
    }
}
