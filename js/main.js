let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let textFirst = document.querySelector('.text_1')
let textSecond = document.querySelector('.text_2')
let textThird = document.querySelector('.text_3')
let textFourth = document.querySelector('.text_4')
let secret = document.querySelector('.hidden')
let secretSecond  = document.querySelector('.hidden_2')
let secretThird = document.querySelector('.hidden_3')
let secretFourth = document.querySelector('.hidden_4')






btn.addEventListener('click',()=>{

    textFirst.textContent = inp.value /800;
    textSecond.textContent = inp.value /70;
    textThird.textContent = inp.value /50;
    textFourth.textContent = inp.value /25;
    secret.classList.add('nohidden')
    secretSecond.classList.add('nohidden')
    secretThird.classList.add('nohidden')
    secretFourth.classList.add('nohidden')
})