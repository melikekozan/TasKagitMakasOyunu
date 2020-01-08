const list = ["rock.jpg","paper.jpg","scissor.jpeg"];
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const rock = document.getElementById("rock");
const pcSecim = document.getElementById("pc-secim");
const snc = document.querySelector(".pc .sonuc");
const newGame = document.querySelector(".newGame");
const numberOfPlayedGame = document.querySelector('h6.oyunSayac');
const userCounter = document.querySelector("span.player");
const pcCounter = document.querySelector("span.pcPlayer");

let sayac = 0;
let pcSayac= 0 ;
let oyunSayi = 0;
let sonuc = "";

paper.addEventListener("click", playerMadeAchoice);
scissor.addEventListener("click", playerMadeAchoice);
rock.addEventListener("click", playerMadeAchoice);

newGame.addEventListener("click",function(){
    sayac = 0;
    oyunSayi = 0;
    pcSayac = 0;

    
    numberOfPlayedGame.innerHTML = oyunSayi;
    userCounter.innerHTML = sayac;
    pcCounter.innerHTML = pcSayac;
    snc.innerHTML = "";
    pcSecim.src = "img/kk.gif";
})



function playerMadeAchoice(e){

    const userChoice = e.target.getAttribute('data-name');
    
    let pc = rasgele();
    

    if(userChoice === "paper" && pc== "rock"){
        sonuc = "Kağıt, ,taşı sarar. Kağıt kazanır."
        console.log(sonuc);
        sayac++;
    }
    else if(userChoice == "paper" && pc=="paper"){
        sonuc = "İkinizde aynı seçimleri yaptınız. Berabere!"
        console.log(sonuc);
    }
    else if(userChoice === "paper" && pc=="scissor"){
        sonuc = "Makas, kağıdı keser. Makas kazanır."
        console.log(sonuc);
        pcSayac++;
    }
    else if(userChoice === "scissor" && pc== "rock"){
        sonuc= "Taş, makası kırar. Taş kazanır."
        console.log(sonuc);
        pcSayac++;
    }
    else if(userChoice === "scissor" && pc=="paper"){
        sonuc= "Makas, Kağıdı keser. Makas kazanır."
        console.log(sonuc);
        sayac++;
    }
    else if(userChoice === "scissor" && pc=="scissor"){
        sonuc= "İkinizde aynı seçimleri yaptınız. Berabere!"
        console.log(sonuc);
    }
    else if(userChoice === "rock" && pc== "rock"){
        sonuc = "İkinizde aynı seçimleri yaptınız. Berabere!"
        console.log(sonuc);
    }
    else if(userChoice === "rock" && pc=="paper"){
        sonuc= "Kağıt, taşı sarar. Kağıt kazanır."
        console.log(sonuc);
        pcSayac++;
    }
    else if(userChoice === "rock" && pc =="scissor"){
        sonuc = "Taş,makası kırar. Taş kazanır."
        console.log(sonuc);
        sayac++;

    }
    oyunSayi++;

    numberOfPlayedGame.innerHTML = oyunSayi;
    userCounter.innerHTML = sayac;
    pcCounter.innerHTML = pcSayac;
    snc.innerHTML = sonuc;
}
function rasgele(){
    var item = list[Math.floor(Math.random()*list.length)];
    
    pcSecim.src = "img/" + item;
    return item.split('.')[0];
    
}
