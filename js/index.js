const contenedorMenu = document.getElementById('contenedor-menu');
const imgNav = document.querySelector('.nav-image');


contenedorMenu.addEventListener('click', clickMenu);

function clickMenu () {
    contenedorMenu.classList.toggle('active');
    imgNav.classList.toggle('inactive')
}

window.onload = () => {
    const transition_el = document.querySelector('.transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active')
    }, 500);

}

const mainTitle = document.querySelector('.main-title');
const mainTitleH = document.querySelector('.main-title-h1');
const mainProjects = document.querySelector('.main-projects')
const mainProjectsB = document.querySelector('.main-projects__container-button')


mainTitleH.addEventListener('click', () => {
    mainTitle.classList.toggle('desactivate-project');
    mainProjects.classList.toggle('active-project');

})

mainProjectsB.addEventListener('click', () => {
    mainTitle.classList.toggle('desactivate-project');
    mainProjects.classList.toggle('active-project');
})



