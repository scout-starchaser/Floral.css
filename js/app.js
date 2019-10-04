/*
 * Floral.less
 * @author scout.starchaser@gmail.com
*/

const themeSwitchHandler = event => {
    if (event && event.target.tagName === 'BUTTON') {

        document
            .querySelectorAll('#theme-div button')
            .forEach(x => x.className = 'button-inverse-neutral');
    
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