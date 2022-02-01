/*permite a los usuarios ver una versión ampliada de imágenes sin la necesidad de ir a otra página*/
const pagina = document.querySelector('.pagina')
const menu = document.querySelector('.menu-navegacion')


pagina.addEventListener('click', ()=>{
    menu.classList.toggle("spread") /*difundir una clase de menu*/
})

window.addEventListener('click', e =>{  /*indica al navegador que este atento a la interacción del usuario, sin necesidad de tocar el html*/
    if(menu.classList.contains('spread')  /* si el menu, classlist lista de clases de un elemento, */
        && e.target != menu && e.target != pagina){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})