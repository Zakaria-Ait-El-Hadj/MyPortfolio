document.addEventListener('DOMContentLoaded', function() {
var modeImg = document.getElementById('modeImg');
var modeImg2 = document.getElementById('modeImg2');

var modeImgSrc = modeImg.getAttribute('src');
var modeImg2Src = modeImg2.getAttribute('src');

var sunImg = 'assets/icons8-soleil-24.svg';
var moonImg = 'assets/icons8-moon-and-stars-24.png';

var unity = document.getElementById('unity');
var express = document.getElementById('express2');
var github = document.getElementById('github');
var flask = document.getElementById('flask');

var githubwSrc = 'assets/technologies/icons8-githubW.svg';
var githubbSrc = 'assets/technologies/icons8-github.svg';

var expresswSrc = 'assets/technologies/icons8-express-js-w.svg';
var expressbSrc = 'assets/technologies/icons8-express-js.svg';

var flaskwSrc = 'assets/technologies/icons8-ballonW.svg';
var flaskbSrc = 'assets/technologies/icons8-ballon.svg';

var unitywSrc = 'assets/technologies/icons8-unity.svg';
var unitybSrc = 'assets/technologies/icons8-unité.svg';

var storedSrc = localStorage.getItem('imageSrc');

//init the images source
if(storedSrc === null){
    modeImg.setAttribute('src',modeImgSrc);
    modeImg2.setAttribute('src',modeImg2Src);
}else{
    modeImg.setAttribute('src',storedSrc);
    modeImg2.setAttribute('src',storedSrc);
}

themeSwitch();
renderLink();

// Event listener function for both modeImg and modeImg2
function handleModeImageClick() {
    var imgSrc = this.getAttribute('src');
    if(imgSrc === sunImg){
        changeImage(moonImg);
        localStorage.setItem('theme', 'dark');
    } else {
        changeImage(sunImg);
        localStorage.setItem('theme', 'light');
    }
    themeSwitch();
}

// Attach the event listener function to both modeImg and modeImg2
modeImg.addEventListener('click', handleModeImageClick);
modeImg2.addEventListener('click', handleModeImageClick);

//change the image source
function changeImage(imageSrc){
    localStorage.setItem('imageSrc', imageSrc);
    var imagesrc = localStorage.getItem('imageSrc');
    modeImg.setAttribute('src' , imagesrc);
    modeImg2.setAttribute('src', imagesrc);
}

//change themes
function themeSwitch(){
    var theme = localStorage.getItem('theme')
    if(theme === 'dark'){
        document.body.classList.remove('light2');
        document.body.classList.add('dark');
        github.setAttribute('src',githubwSrc)
        express.setAttribute('src',expresswSrc)
        flask.setAttribute('src',flaskwSrc)
        unity.setAttribute('src',unitywSrc)
    }else{
        document.body.classList.remove('dark');
        document.body.classList.add('light2');
        github.setAttribute('src',githubbSrc);
        express.setAttribute('src',expressbSrc)
        flask.setAttribute('src',flaskbSrc)
        unity.setAttribute('src',unitybSrc)
    }
}

function isMobileOrTablet() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Render the appropriate link
function renderLink() {
    var gmailLinks = document.querySelectorAll('.gmailLink');

    if (isMobileOrTablet()) {
        gmailLinks.forEach(element => {
            element.setAttribute('href', 'mailto:aitelhadjzakaria12@gmail.com');
        });
    } else {
        gmailLinks.forEach(element => {
            element.setAttribute('href', 'https://mail.google.com/mail/?view=cm&fs=1&to=aitelhadjzakaria12@gmail.com');
        });
    }
}



})
