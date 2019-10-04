/*
 * Floral.less
 * @author scout.starchaser@gmail.com
*/

document.addEventListener('DOMContentLoaded', event => {
    document
        .querySelectorAll('.textarea')
        .forEach(x => x.setAttribute('contenteditable', true));
});