import { renderHomePage } from './modules/home'
import { renderMenuPage } from './modules/menu'
import { renderContactPage } from './modules/contact'


renderHomePage();

let navTabs;

(function addClickListeners() {
    navTabs = document.querySelectorAll('.navTabs');

    navTabs.forEach((tab) => {
        tab.addEventListener('click', function() {
            clearContent();
            if (tab.innerHTML == 'Home') {
                renderHomePage();
                addClickListeners()
            } else if (tab.innerHTML == 'Menu') {
                renderMenuPage();
                addClickListeners()
            } else {
                renderContactPage();
                addClickListeners()
            }
        })
    })
})();

function clearContent() {
    document.querySelector('#content').innerHTML = '';
}