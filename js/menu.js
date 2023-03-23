const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(ham)

ham.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != ham){
            menu.classList.toggle("spread")
    }
})