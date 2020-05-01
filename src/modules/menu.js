function renderMenuPage() {
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
        menuTab.setAttribute('id', 'selectedTab')
        navTabs.appendChild(menuTab);

        const contactTab = document.createElement('div');
        contactTab.innerText = 'Contact Us';
        contactTab.classList.add('navTabs')
        navTabs.appendChild(contactTab);

    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent')
    
        const homeBlurb = document.createElement('p');
        homeBlurb.innerText = 'Menu:';
        homeContent.appendChild(homeBlurb);

        
    
    content.appendChild(header);
    content.appendChild(navTabs);
    content.appendChild(homeContent);
}

export { renderMenuPage }