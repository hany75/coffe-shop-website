let navbar=document.querySelector('.navbar')
let menubtn=document.getElementById('menu-btn')

menubtn.onclick=()=>{
    navbar.classList.toggle('active')
    cartItem.classList.remove('active')
    searchBox.classList.remove('active')
}




let cartItem =document.querySelector('.cart-itmes-container');


document.querySelector("#cart-btn").onclick = () =>{
    cartItem.classList.toggle('active')
    searchBox.classList.remove('active')
}




let searchBox =document.querySelector('#search-box');


document.querySelector("#search-btn").onclick = () =>{
    searchBox.classList.toggle('active')
    cartItem.classList.remove('active')
}