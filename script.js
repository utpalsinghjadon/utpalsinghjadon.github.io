const darkModeButton = document.querySelector('.darkmode-button');
const bodyContainer = document.querySelector('.body-container');
const aboutmeContainer = document.querySelector('.about-container');
const navContainer = document.querySelector('.nav-container');
const projectsContainer = document.querySelector('.projects-container');
const projectsContainerSmall = document.querySelectorAll('.projects-container-small');
const roles = document.querySelector('.roles');

darkModeButton.addEventListener('click', function () {
    bodyContainer.classList.add('darkmode-body')
    aboutmeContainer.classList.add('darkmode')
    navContainer.classList.add('darkmode')
    projectsContainer.classList.add('darkmode')
    darkModeButton.style.display = 'none'
    for (const i of projectsContainerSmall) {
        i.classList.add('darkmode-body');
    }
})

// setTimeout(function () {
//     roles.textContent = 'Front End Designer'
// }, 2000)
