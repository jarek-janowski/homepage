const firstName = ('Jarek');
const age = ('24');

// alert('Witaj!')


// const heading = document.querySelector('.main-heading--js');

// heading.innerHTML = `Cześć! Jestem ${imie}, mam ${age} lata i witam Cie na mojej stronie :)`;

//---------------------------------<>------------------------------------------

// const footer = document.querySelector('.footer__decription--js');

// footer.innerHTML = '<b>WTF</b> - all rights reserved ';



function hello(firstName, age) {
    console.log((`Cześć! Jestem ${firstName}, mam ${age} lata i witam Cie na mojej stronie :)`));
    // return firstName, age;
}

hello(firstName, age);
hello('Konrad', 32);


//-------------------------------<>------------------------------------------------


function replaceText(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

replaceText('.footer__decription--js', '<b>WTF</b> - all rights reserved ');

function helloAlert(firstName, age) {
    alert(`Cześć! Jestem ${firstName}, mam ${age} lata i witam Cie na mojej stronie :)`);
    // return firstName, age;
}

helloAlert(firstName, age);