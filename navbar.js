const btn = document.getElementById('navbtn');
const navbar = document.getElementById('navbar-default');

btn.addEventListener('click' , () => {
    navbar.classList.toggle('hidden');
})