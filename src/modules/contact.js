function renderContactPage() {
    const content = document.querySelector('#content');
    content.setAttribute('id', 'content')

    const header = document.createElement('div');
    
        const restaurantName = document.createElement('h1');
        restaurantName.innerText = 'Giontello\'s Restaurant';
        header.appendChild(restaurantName);


    const navTabs = document.createElement('div');
    
        const homeTab = document.createElement('div');
        homeTab.innerText = 'Home';
        homeTab.classList.add('navTabs')
        navTabs.appendChild(homeTab);

        const menuTab = document.createElement('div');
        menuTab.innerText = 'Menu';
        menuTab.classList.add('navTabs')
        navTabs.appendChild(menuTab);

        const contactTab = document.createElement('div');
        contactTab.innerText = 'Contact Us';
        contactTab.classList.add('navTabs')
        contactTab.setAttribute('id', 'selectedTab')
        navTabs.appendChild(contactTab);

    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent')
    
        const contactBlurb = document.createElement('p');
        contactBlurb.innerHTML = 'Contact Us: <br><br> carl.doleo.lundgren@gmail.com | <a href="https://github.com/carldoleolundgren">GitHub</a>';
        homeContent.appendChild(contactBlurb);

    content.appendChild(header);
    content.appendChild(navTabs);
    content.appendChild(homeContent);
}

export { renderContactPage }