const expressjs = 'assets/technologies/icons8-express-js.svg';
const expressjsw = 'assets/technologies/icons8-express-js-w.svg';
const nodejs = 'assets/technologies/icons8-nodeJs.svg';
const mongodb = 'assets/technologies/icons8-mongoDb.svg';
const html5 = 'assets/technologies/icons8-html5.svg';
const css = 'assets/technologies/icons8-css.svg';
const bootstrap = 'assets/technologies/icons8-bootstrap.svg';
const javascript = 'assets/technologies/icons8-javascript.svg';
const jquery = 'assets/technologies/icons8-jquery.svg';
const csharp = 'assets/technologies/c--4.svg';
const dotnet = 'assets/technologies/dotnet-ar21.svg';
const sqlserver = 'assets/technologies/icons8-serveur-microsoft-sql.svg';

const readMoreBtn1 = document.getElementById('prj1Btn');
const readMoreBtn2 = document.getElementById('prj2Btn');
const readMoreBtn3 = document.getElementById('prj3Btn');

const close = document.getElementById('close');
const modal = document.getElementById('default-modal');

const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const technologiesHolder = document.getElementById('technologiesHolder');


    readMoreBtn1.addEventListener('click', () => {
        modalData(readMoreBtn1);
        toggleModal(modal);
    });
    readMoreBtn2.addEventListener('click', () => {
        modalData(readMoreBtn2);
        toggleModal(modal);
    });
    readMoreBtn3.addEventListener('click', () => {
        modalData(readMoreBtn3);
        toggleModal(modal);
    });
    close.addEventListener('click', () => {
        toggleModal(modal);
    });

    function toggleModal(modal){
        modal.classList.toggle('hidden');       
    }

    function modalData(btn){
        const parentDiv = btn.parentElement;
        const h2Tag = parentDiv.querySelector('h2').innerHTML;
        const pTag = parentDiv.querySelector('p').innerHTML;

        modalTitle.innerHTML = h2Tag;
        modalDescription.innerHTML = pTag;  
        
        technologiesHolder.children.length > 0 ? clearAndAppend(technologiesHolder , btn) :appendingImages(btn);      
    }

    function appendingImages(btn){
       if(btn == readMoreBtn1){
        let nodejsImg = document.createElement('img');
        let expressjsImg = document.createElement('img');
        let mongodbImg = document.createElement('img');

        document.body.classList.contains('dark') ? expressjsImg.src = expressjsw : expressjsImg.src = expressjs;

        nodejsImg.src = nodejs;
        mongodbImg.src = mongodb;

        technologiesHolder.append(nodejsImg,expressjsImg,mongodbImg);
       }
       else {
        let html5Img = document.createElement('img');
        let cssImg = document.createElement('img');
        let bootstrapImg = document.createElement('img');
        let javascriptImg = document.createElement('img');
        let jqueryImg = document.createElement('img');
        let csharpImg = document.createElement('img');
        let dotnetImg = document.createElement('img');
        let sqlserverImg = document.createElement('img');

        html5Img.src = html5;
        cssImg.src = css;
        bootstrapImg.src = bootstrap;
        javascriptImg.src = javascript;
        jqueryImg.src = jquery;
        csharpImg.src = csharp;
        dotnetImg.src = dotnet;
        sqlserverImg.src = sqlserver;

        technologiesHolder.append(html5Img , cssImg , bootstrapImg, javascriptImg, jqueryImg, csharpImg, dotnetImg, sqlserverImg);
       }
    }

    function clearAndAppend(parentDiv , btn){
        while (parentDiv.firstChild) {
            parentDiv.removeChild(parentDiv.firstChild);
        }
        appendingImages(btn);
    }