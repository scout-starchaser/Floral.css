/*
 * Floral.less
 * @author scout.starchaser@gmail.com
*/

const themeSwitchHandler = event => {
    document
        .querySelectorAll('#theme-div button')
        .forEach(x => x.className = 'button-inverse-neutral');
    
    if (event && event.target.tagName === 'BUTTON') {
        document.body.className = event.target.id;
        event.target.className = 'button-c';
    }
}

document.querySelector('#theme-div')
    .addEventListener('click', themeSwitchHandler);

document.querySelector('form')
    .addEventListener('submit', event => {

        event.preventDefault();
    });

document.addEventListener('DOMContentLoaded', event => {
    document
        .querySelectorAll('.textarea')
        .forEach(x => x.setAttribute('contenteditable', true));
});